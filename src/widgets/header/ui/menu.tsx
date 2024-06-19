import { NavLink } from '@/shared'
import { List, ListItem } from '@mui/material'

import { MenuLink } from './menu-link'

type Props = {
  navItems: NavLink[]
}
export const Menu = ({ navItems }: Props) => {
  return (
    <List sx={{ display: 'flex', gap: '27px' }}>
      {navItems.map(item => (
        <ListItem disablePadding key={item.href}>
          <MenuLink {...item} />
        </ListItem>
      ))}
    </List>
  )
}
