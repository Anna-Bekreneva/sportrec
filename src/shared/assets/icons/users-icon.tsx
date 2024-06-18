import { Ref, SVGProps, forwardRef, memo } from 'react'

const UsersIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'18'}
    ref={ref}
    viewBox={'0 0 19 18'}
    width={'19'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M16.8813 15.75V14.25C16.8813 12.8521 15.9253 11.6775 14.6313 11.3445M12.0063 2.46807C13.1058 2.91311 13.8813 3.99098 13.8813 5.25C13.8813 6.50902 13.1058 7.58689 12.0063 8.03193M13.1313 15.75C13.1313 14.3522 13.1313 13.6533 12.903 13.1019C12.5985 12.3669 12.0145 11.7828 11.2794 11.4784C10.7281 11.25 10.0292 11.25 8.63135 11.25H6.38135C4.98352 11.25 4.28461 11.25 3.7333 11.4784C2.99821 11.7828 2.41419 12.3669 2.10971 13.1019C1.88135 13.6533 1.88135 14.3522 1.88135 15.75M10.5063 5.25C10.5063 6.90685 9.1632 8.25 7.50635 8.25C5.84949 8.25 4.50635 6.90685 4.50635 5.25C4.50635 3.59315 5.84949 2.25 7.50635 2.25C9.1632 2.25 10.5063 3.59315 10.5063 5.25Z'
      }
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.35'}
    />
  </svg>
)

const ForwardRef = forwardRef(UsersIcon)
const Memo = memo(ForwardRef)

export default Memo
