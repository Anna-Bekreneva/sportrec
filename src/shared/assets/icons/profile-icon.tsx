import { Ref, SVGProps, forwardRef, memo } from 'react'

const ProfileIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d={
        'M16.6663 17.4999C16.6663 16.3369 16.6663 15.7554 16.5228 15.2823C16.1996 14.2169 15.366 13.3832 14.3006 13.0601C13.8275 12.9165 13.246 12.9165 12.083 12.9165H7.91634C6.75337 12.9165 6.17189 12.9165 5.69872 13.0601C4.63339 13.3832 3.79971 14.2169 3.47654 15.2823C3.33301 15.7554 3.33301 16.3369 3.33301 17.4999M13.7497 6.24988C13.7497 8.32095 12.0707 9.99988 9.99967 9.99988C7.92861 9.99988 6.24967 8.32095 6.24967 6.24988C6.24967 4.17881 7.92861 2.49988 9.99967 2.49988C12.0707 2.49988 13.7497 4.17881 13.7497 6.24988Z'
      }
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.5'}
    />
  </svg>
)

const ForwardRef = forwardRef(ProfileIcon)
const Memo = memo(ForwardRef)

export default Memo
