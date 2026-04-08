import { div, fieldset, input, output, tag } from 'taggedjs'
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

  return fieldset.style`border:0;padding:0;margin:0;`(
    input
      .type`text`
      .attr('placeholder', 'paste website address')
      .value(_ => qrUrl)
      .attr('maxlength', '1000')
      .onKeyUp((e: any) => onQrUrlChange(e.target.value)),
    div.style`display:flex;justify-content: center;`(
      _ => qrUrl && qrCodeDisplay(qrUrl)
    )
  )
})
