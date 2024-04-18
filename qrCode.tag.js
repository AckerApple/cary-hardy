import { watch, html, tag, state } from "./taggedjs/bundle.js"

export const qrCodeDisplay = tag(url => {  
  const id = state(() => "qrTestElm" + performance.now())

  const onQrReady = () => {
    const elm = document.getElementById(id)
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

  watch([url], () => {
    onQrReady()
  })

  return html`
    <div id=${id} oninit=${loadQr}></div>
  `
})
