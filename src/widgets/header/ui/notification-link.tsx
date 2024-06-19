import { AppRoutes, RouterNavLink, getIcon } from '@/shared'
import { Badge, Box, Link, useTheme } from '@mui/material'

type Props = {
  isNewNotifications?: boolean
}

/**
 * Подразумеваю, что уведмоления это ссылка, а не кнопка.
 * Потому что в мобильной версии это очень похоже на ссылку
 * (1. назодится в одном списке с ссылками;
 * 2. по внешнему виду не отличается от других ссылок в этом списке;
 * 3. сомневаюсь, что в мобильном окне с меню будет открываться дополнительное окно с уведомлениями))
 * */

// isNewNotifications установила true, чтобы срзау видеть значок
export const NotificationLink = ({ isNewNotifications }: Props) => {
  const { palette } = useTheme()

  const styles = {
    notificationBadge: {
      '.MuiBadge-badge': {
        display: 'block',
        height: '5px',
        minWidth: '5px',
        right: '-20px',
        top: '-9px',
        width: '5px',
      },
    },
    notificationIcon: {
      height: '20px',
      width: '20px',
    },
    notificationLink: {
      '&:hover': {
        backgroundColor: palette.background.default,
      },
      alignItems: 'center',
      borderRadius: '50%',
      display: 'flex',
      padding: '8px',
      position: 'relative',
      transition: 'background-color 0.3s',
    },
  }

  return (
    <Link
      aria-label={'notifications'}
      component={RouterNavLink}
      sx={styles.notificationLink}
      to={AppRoutes.NOTIFICATIONS}
      underline={'hover'}
    >
      {isNewNotifications && (
        <Badge aria-hidden color={'error'} sx={styles.notificationBadge} variant={'dot'} />
      )}
      <Box aria-hidden component={'span'} sx={styles.notificationIcon}>
        {getIcon(AppRoutes.NOTIFICATIONS)}
      </Box>
    </Link>
  )
}
