import { ReactNode } from 'react'
import { NavLink as NavLinkBase } from 'react-router-dom'

import { useTheme } from '@mui/material'

type Props = {
  children: ReactNode
  className?: string
  to: string
}

export const RouterNavLink = ({ children, className, to }: Props) => {
  const theme = useTheme()
  const getClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${className} Mui-selected` : className

  const activeStyle = {
    color: theme.palette.primary['700'],
    textDecoration: 'none',
  }

  return (
    <NavLinkBase
      className={getClassName}
      style={({ isActive }) => (isActive ? activeStyle : {})}
      to={to}
    >
      {children}
    </NavLinkBase>
  )
}
