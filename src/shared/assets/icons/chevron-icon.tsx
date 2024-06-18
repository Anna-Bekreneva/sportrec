import { Ref, SVGProps, forwardRef, memo } from 'react'

const ChevronIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'20'}
    ref={ref}
    viewBox={'0 0 20 20'}
    width={'20'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={'M5 7.5L10 12.5L15 7.5'}
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.5'}
    />
  </svg>
)

const ForwardRef = forwardRef(ChevronIcon)
const Memo = memo(ForwardRef)

export default Memo
