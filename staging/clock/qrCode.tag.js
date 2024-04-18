import { html, tag } from "../taggedjs/bundle.js"

export const qrCodeDisplay = tag((url) => {
  const onQrReady = () => {
    new QRCode(document.getElementById("qrTestElm"), {
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

  return html`
    <div style="border:1px solid red;width:400px;height:400px" id="qrTestElm" oninit=${loadQr}></div>
  `
})
