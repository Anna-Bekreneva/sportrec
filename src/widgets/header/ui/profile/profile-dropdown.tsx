import React, { useState } from 'react'

import { ChevronIcon } from '@/shared'
import { ProfileAvatar, ProfileAvatarProps, ProfileList } from '@/widgets/header/ui'
import { Box, Button, Menu, useTheme } from '@mui/material'

/**
 * src — сама автарка. Подразумевается, что изображение будет приходить с сервера
 * Но может быть такое, что у пользователя нет аватрки. В таком случае выведим круг с фоновым цветом и первую букву имени
 */

export const ProfileDropdown = (props: ProfileAvatarProps) => {
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
        id={'profile-dropdown-trigger'}
        onClick={handleClick}
        sx={{ display: 'flex', gap: '8px', paddingLeft: 0, paddingRight: 0 }}
      >
        <ProfileAvatar {...props} />
        <Box aria-hidden sx={{ color: palette.primary[400], height: '20px', width: '20px' }}>
          <ChevronIcon />
        </Box>
      </Button>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'profile-dropdown-trigger',
        }}
        anchorEl={anchorEl}
        id={'profile-menu'}
        onClose={handleClose}
        open={open}
      >
        <ProfileList />
      </Menu>
    </div>
  )
}
