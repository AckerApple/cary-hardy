import { div, fieldset, input, output, small, tag } from 'taggedjs'
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
    console.log('latest qrUrl', { qrUrl, x })
  })

  return fieldset.style`border:0;padding:0;margin:0;`(
    input
      .type`text`
      .placeholder`paste website address`
      .value(_ => qrUrl)
      .maxLength`1000`
      .onKeyUp((e: any) => {
        qrUrl = e.target.value
        return onQrUrlChange(e.target.value)
      })
      .onInput((e: any) => {
        qrUrl = e.target.value
        return onQrUrlChange(e.target.value)
      }),
    div.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(
      _ => qrUrl && qrCodeDisplay(qrUrl),
      _ => qrUrl &&
        small.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`
          (_=> qrUrl)
    )
  )
})
