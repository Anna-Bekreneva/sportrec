import React, { useState } from 'react'

import { ChevronIcon } from '@/shared'
import { profileNavItems } from '@/widgets/header/model'
import { MenuLink } from '@/widgets/header/ui/menu-link'
import { Avatar, Box, Button, ListItem, Menu, useTheme } from '@mui/material'

/**
 * src — сама автарка. Подразумевается, что изображение будет приходить с сервера
 * Но может быть такое, что у пользователя нет аватрки. В таком случае выведим круг с фоновым цветом и первую букву имени
 */

type Props = {
  src?: string
  userName: string
}
export const ProfileDropdown = ({ src, userName }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const { palette } = useTheme()
  const open = !!anchorEl
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <div>
      <Button
        aria-controls={open ? 'profile-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup={'true'}
        aria-label={'Навигация профиля'}
        id={'basic-button'}
        onClick={handleClick}
        sx={{ display: 'flex', gap: '8px', paddingLeft: 0, paddingRight: 0 }}
      >
        <Avatar
          alt={userName}
          sizes={'36px'}
          src={src}
          sx={
            !src
              ? { bgcolor: palette.primary[700], height: '36px', width: '36px' }
              : { height: '36px', width: '36px' }
          }
        >
          {!src && userName[0]}
        </Avatar>
        <Box aria-hidden sx={{ color: palette.primary[400], height: '20px', width: '20px' }}>
          <ChevronIcon />
        </Box>
      </Button>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorEl={anchorEl}
        id={'profile-menu'}
        onClose={handleClose}
        open={open}
      >
        {profileNavItems.map(item => (
          <ListItem disablePadding key={item.href}>
            <MenuLink isIcon={false} {...item} />
          </ListItem>
        ))}
      </Menu>
    </div>
  )
}
