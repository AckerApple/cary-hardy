import { watch, div, tag, state } from "taggedjs"

declare const QRCode: any;

export const qrCodeDisplay = tag(url => {  
  const id = state(() => "qrTestElm" + performance.now())

  const onQrReady = () => {
    const elm = document.getElementById(id) as HTMLElement
    elm.innerHTML = ''
    new QRCode(elm, {
      text: url,
      width: 300,
      height: 300,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.L
    })
  }

  const loadQr = () => {
    if(typeof(QRCode) === 'undefined') {
      var script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'

      // Execute callback once the script is loaded
      script.onload = onQrReady

      document.head.appendChild(script)
      return
    }
    
    onQrReady()
  }
    
  watch.noInit([url], () => {
    onQrReady()
  })

  return div({id, oninit: loadQr})
})
