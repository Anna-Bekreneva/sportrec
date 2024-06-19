import { NavLink, RouterNavLink, getIcon } from '@/shared'
import { Box, Link } from '@mui/material'

type Props = {
  isIcon?: boolean
} & NavLink

/**
  Компонент MenuLink отрисовывет NavLink из react-router-dom
 Нужен для корректный работы с MUI и для выделения активной ссылки
 */
export const MenuLink = ({ href, isIcon = true, name, ...rest }: Props) => {
  return (
    <Link
      component={RouterNavLink}
      sx={{ alignItems: 'center', display: 'flex', gap: '10px', padding: '8px' }}
      to={href}
      underline={'hover'}
      variant={'body1'}
      {...rest}
    >
      {isIcon && (
        <Box aria-hidden component={'span'} sx={{ height: '18px', width: '18px' }}>
          {getIcon(href)}
        </Box>
      )}
      {name}
    </Link>
  )
}
