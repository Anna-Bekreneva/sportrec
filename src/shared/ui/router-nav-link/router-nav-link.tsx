import { ReactNode, forwardRef } from 'react'
import { NavLink as NavLinkBase } from 'react-router-dom'

import { useTheme } from '@mui/material'

type Props = {
  children: ReactNode
  className?: string
  to: string
}

/**
 Компонент RouterNavLink отрисовывет NavLink из react-router-dom и принимает children
 RouterNavLink Нужен для корректный работы с MUI и для выделения активной ссылки
 Компонент обернут в forwardRef, потому что NavLink из react-router-dom не принимает ref, а MUI его отдает
 */

export const RouterNavLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, className, to }, ref) => {
    const theme = useTheme()
    const getClassName = ({ isActive }: { isActive: boolean }) =>
      isActive ? `${className} Mui-selected` : className

    const activeStyle = {
      color: theme.palette.primary[700],
      textDecoration: 'none',
    }

    return (
      <NavLinkBase
        className={getClassName}
        ref={ref}
        style={({ isActive }) => (isActive ? activeStyle : {})}
        to={to}
      >
        {children}
      </NavLinkBase>
    )
  }
)
