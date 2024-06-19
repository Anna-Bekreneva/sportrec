import { profileNavItems } from '@/widgets/header/model'
import { MenuLink } from '@/widgets/header/ui'
import { ListItem } from '@mui/material'

export const ProfileList = () => {
  return (
    <>
      {profileNavItems.map(item => (
        <ListItem disablePadding key={item.href}>
          <MenuLink isIcon={false} {...item} />
        </ListItem>
      ))}
    </>
  )
}
