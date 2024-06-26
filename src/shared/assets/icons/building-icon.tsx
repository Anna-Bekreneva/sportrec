import { Ref, SVGProps, forwardRef, memo } from 'react'

const BuildingIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        'M2.63135 15.7498H16.1313M4.88135 13.4998V7.4998M7.88135 13.4998V7.4998M10.8813 13.4998V7.4998M13.8813 13.4998V7.4998M15.3813 5.2498L9.69935 1.69855C9.58398 1.62645 9.5263 1.5904 9.46444 1.57634C9.40974 1.56391 9.35295 1.56391 9.29825 1.57634C9.23639 1.5904 9.17871 1.62645 9.06335 1.69855L3.38135 5.2498H15.3813Z'
      }
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.35'}
    />
  </svg>
)

const ForwardRef = forwardRef(BuildingIcon)
const Memo = memo(ForwardRef)

export default Memo
