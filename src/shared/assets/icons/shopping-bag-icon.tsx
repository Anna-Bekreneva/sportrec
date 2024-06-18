import { Ref, SVGProps, forwardRef, memo } from 'react'

const ShoppingBagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        'M12.3816 6.75V4.5C12.3816 2.84315 11.0385 1.5 9.38163 1.5C7.72477 1.5 6.38162 2.84315 6.38162 4.5V6.75M3.07563 7.76397L2.62563 12.564C2.49768 13.9287 2.43371 14.6111 2.66016 15.1382C2.8591 15.6012 3.20771 15.984 3.65014 16.2253C4.15377 16.5 4.83915 16.5 6.20991 16.5H12.5533C13.9241 16.5 14.6095 16.5 15.1131 16.2253C15.5555 15.984 15.9042 15.6012 16.1031 15.1382C16.3295 14.6111 16.2656 13.9287 16.1376 12.564L15.6876 7.76397C15.5796 6.61151 15.5256 6.03528 15.2664 5.59962C15.0381 5.21594 14.7009 4.90883 14.2976 4.71738C13.8396 4.5 13.2609 4.5 12.1033 4.5L6.65991 4.5C5.50239 4.5 4.92363 4.5 4.46569 4.71738C4.06237 4.90883 3.72513 5.21594 3.49687 5.59962C3.23769 6.03528 3.18367 6.61151 3.07563 7.76397Z'
      }
      stroke={'currentColor'}
      strokeLinecap={'round'}
      strokeLinejoin={'round'}
      strokeWidth={'1.5'}
    />
  </svg>
)

const ForwardRef = forwardRef(ShoppingBagIcon)
const Memo = memo(ForwardRef)

export default Memo
