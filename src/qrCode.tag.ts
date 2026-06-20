import { div, tag, watch } from 'taggedjs'

type QrCodeCtor = {
  CorrectLevel: { L: unknown }
  new (element: HTMLElement, options: {
    text: string
    width: number
    height: number
    colorDark: string
    colorLight: string
    correctLevel: unknown
  }): unknown
}

declare global {
  interface Window {
    QRCode?: QrCodeCtor
  }
}

let qrCodeLibPromise: Promise<void> | null = null

const ensureQrCodeLib = () => {
  if (window.QRCode) {
    return Promise.resolve()
  }

  if (qrCodeLibPromise) {
    return qrCodeLibPromise
  }

  qrCodeLibPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load QRCode library'))
    document.head.appendChild(script)
  })

  return qrCodeLibPromise
}

export const qrCodeDisplay = tag((url: string) => {
  const id = `qr-code-${Math.random().toString(36).slice(2, 12)}`

  const scheduleQrRender = () => {
    window.requestAnimationFrame(loadAndRenderQr)
  }

  const renderQr = () => {
    const qrCodeCtor = window.QRCode
    if (!qrCodeCtor || !url) {
      return
    }

    const elm = document.getElementById(id) as HTMLElement | null
    if (!elm) {
      return
    }

    elm.innerHTML = ''
    new qrCodeCtor(elm, {
      text: url,
      width: 300,
      height: 300,
      colorDark: '#000000',
      colorLight: '#ffffff',
      correctLevel: qrCodeCtor.CorrectLevel.L,
    })
  }

  const loadAndRenderQr = () => {
    ensureQrCodeLib()
      .then(renderQr)
      .catch((error) => {
        console.error('Failed to render QR code', error)
      })
  }

  qrCodeDisplay.updates(x => {
    if (x[0] !== url) {
      [url] = x
      scheduleQrRender()
    }
  })

  watch([url], scheduleQrRender)

  return div
    .id`${id}`
    .attr('oninit', scheduleQrRender)
    .style`display:flex;justify-content:center;align-items:center;margin-top:1em;min-height:300px;`
    ()
})
