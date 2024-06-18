import { Ref, SVGProps, forwardRef, memo } from 'react'

const RussiaFlagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'20'}
    ref={ref}
    viewBox={'0 0 20 20'}
    width={'20'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_3002_7083)'}>
      <path
        d={'M17.7778 0H2.22222C0.995 0 0 1.34325 0 3V6H20V3C20 1.34325 19.005 0 17.7778 0Z'}
        fill={'#EEEEEE'}
      />
      <path d={'M0 6H20V14H0V6Z'} fill={'#22408C'} />
      <path
        d={'M20 17C20 18.6568 19.005 20 17.7778 20H2.22222C0.995 20 0 18.6568 0 17V14H20V17Z'}
        fill={'#CE2028'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_3002_7083'}>
        <rect fill={'white'} height={'20'} width={'20'} />
      </clipPath>
    </defs>
  </svg>
)

const ForwardRef = forwardRef(RussiaFlagIcon)
const Memo = memo(ForwardRef)

export default Memo
