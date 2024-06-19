import { AppRoutes, NavLink } from '@/shared'
import { MenuLink, NotificationLink } from '@/widgets/header/ui'
import { List, ListItem, SxProps, Theme } from '@mui/material'

type Props = {
  navItems: NavLink[]
  sx?: SxProps<Theme>
}
export const Menu = ({ navItems, sx: style }: Props) => {
  return (
    <List sx={{ display: 'flex', gap: '27px', ...style }}>
      {navItems.map(item => (
        <ListItem disablePadding key={item.href}>
          {item.href === AppRoutes.NOTIFICATIONS ? (
            <NotificationLink name={item.name} />
          ) : (
            <MenuLink {...item} />
          )}
        </ListItem>
      ))}
    </List>
  )
}
