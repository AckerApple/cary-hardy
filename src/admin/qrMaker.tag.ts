import { callback, div, fieldset, input, output, small, tag } from 'taggedjs'
import { qrCodeDisplay } from '../qrCode.tag'

export const qrMakerSection = tag(({
  qrUrl,
  onQrUrlChange,
}: {
  qrUrl: string
  onQrUrlChange: (value: string) => void
}) => {
  qrMakerSection.inputs((x) => {
    [{ qrUrl, onQrUrlChange }] = x
    onQrUrlChange = output(onQrUrlChange)
  })

  const updateQrUrl = (value: string) => {
    qrUrl = value
    onQrUrlChange(value)
  }

  return fieldset.style`border:0;padding:0;margin:0;`(
    input
      .type`text`
      .placeholder`paste website address`
      .value(_ => qrUrl)
      .maxLength`1000`
      .onInput((e: any) => {
        updateQrUrl(e.target.value)
      }),
    
    div.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(
      _ => {
        console.log('qrUrl check display', { qrUrl })
        return qrUrl && qrCodeDisplay(qrUrl)
      },
      _ => qrUrl &&
        small.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`
          (_=> qrUrl)
    )
  )
})
