import { AppRoutes, RouterNavLink, getIcon } from '@/shared'
import { Badge, Box, Link, useTheme } from '@mui/material'

type Props = {
  isNewNotifications?: boolean
  name?: string
}

// isNewNotifications установила true, чтобы срзау видеть значок
export const NotificationLink = ({ isNewNotifications = true, name }: Props) => {
  const { palette } = useTheme()

  const styles = {
    badge: {
      '.MuiBadge-badge': {
        display: 'block',
        height: '5px',
        minWidth: '5px',
        right: '-20px',
        top: '-12px',
        width: '5px',
      },
    },
    icon: {
      height: '20px',
      width: '20px',
    },
    link: {
      '&:hover': {
        backgroundColor: palette.background.default,
      },
      alignItems: 'center',
      borderRadius: '10px',
      display: 'flex',
      gap: '10px',
      padding: '8px',
      transition: 'background-color 0.3s',
    },
    wrapper: {
      position: 'relative',
    },
  }

  return (
    <Link
      aria-label={'notifications'}
      component={RouterNavLink}
      sx={styles.link}
      to={AppRoutes.NOTIFICATIONS}
      underline={'hover'}
      variant={'body1'}
    >
      <Box sx={styles.wrapper}>
        {isNewNotifications && (
          <Badge aria-hidden color={'error'} sx={styles.badge} variant={'dot'} />
        )}
        <Box aria-hidden component={'span'} sx={styles.icon}>
          {getIcon(AppRoutes.NOTIFICATIONS)}
        </Box>
      </Box>
      {name}
    </Link>
  )
}
