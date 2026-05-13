import { div, img, span, tag } from 'taggedjs'

const ratingBadgeUrl = new URL('../assets/media/icons/rating-badge.png', import.meta.url).href

export const ratingBadge = tag(({
  rating,
  size = 82,
}: {
  rating: number | null | undefined
  size?: number
}) => {
  ratingBadge.inputs((args) => {
    ;[{ rating, size = 82 }] = args
  })

  const value = formatBadgeRating(rating)

  return div
    .class`rating-badge`
    .attr('aria-label', _ => value ? `Rating ${value} out of 10` : 'Not rated')
    .attr('title', _ => value ? `${value}/10` : 'Not rated')
    .style`
      width:${size}px;
      height:${size}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(
      img
        .src`${ratingBadgeUrl}`
        .attr('alt', '')
        .attr('aria-hidden', 'true')
        .style`
          width:100%;
          height:100%;
          display:block;
          object-fit:contain;
        `(),
      value
        ? span.style`
            position:absolute;
            left:50%;
            top:40%;
            transform:translate(-50%, -50%);
            color:#061b36;
            font-family:Georgia, 'Times New Roman', serif;
            font-weight:900;
            font-size:${Math.round(size * 0.27)}px;
            line-height:1;
            letter-spacing:0;
            text-align:center;
            white-space:nowrap;
            text-shadow:0 1px 0 rgba(255,255,255,0.28);
          `(value)
        : ''
    )
})

const formatBadgeRating = (rating: number | null | undefined) => {
  if (typeof rating !== 'number' || Number.isNaN(rating)) return ''
  return rating.toFixed(1).replace(/\.0$/, '')
}
