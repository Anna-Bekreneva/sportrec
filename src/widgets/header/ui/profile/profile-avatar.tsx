import { Avatar, useTheme } from '@mui/material'

export type ProfileAvatarProps = {
  src?: string
  userName: string
}
export const ProfileAvatar = ({ src, userName }: ProfileAvatarProps) => {
  const { palette } = useTheme()

  return (
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
  )
}
