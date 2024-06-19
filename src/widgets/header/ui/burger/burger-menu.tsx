import { mobileNavItems, navItems } from '@/widgets/header/model'
import {
  LanguageSelect,
  LanguageSelectProps,
  Menu,
  ProfileAccordionMobile,
  ProfileAvatarProps,
} from '@/widgets/header/ui'
import { Drawer, useMediaQuery, useTheme } from '@mui/material'

type Props = {
  isOpen: boolean
} & LanguageSelectProps &
  Partial<ProfileAvatarProps>
export const BurgerMenu = ({ changeValue, currentItem, isOpen, src, userName, value }: Props) => {
  const { breakpoints } = useTheme()
  const matchesSM = useMediaQuery(breakpoints.down('sm'))

  const classes = {
    menu: {
      '.MuiLink-root': { padding: '15px 8px' },
      alignItems: 'flex-start',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px',
    },
    select: {
      padding: '0 6px',
    },
    wrapper: {
      '.MuiDrawer-paper': {
        bottom: 0,
        boxSizing: 'border-box',
        height: matchesSM ? 'calc(100dvh - 78px)' : '100%',
        maxWidth: matchesSM ? '100%' : '342px',
        padding: '0 16px',
        top: 'unset',
        width: '100%',
      },
    },
  }

  return (
    <Drawer
      ModalProps={{
        'aria-labelledby': 'button-mobile-burger-menu',
        id: 'mobile-burger-menu',
      }}
      anchor={'right'}
      open={isOpen}
      sx={classes.wrapper}
      variant={'persistent'}
    >
      {/** Если пользователь авторизирован, то показываем ему меню профииля, основное мееню и смену языка.
        Если нет, то показываем основное меню (без ссылки на уведомления) и смену языка
       */}
      {userName ? (
        <>
          {matchesSM && <ProfileAccordionMobile src={src} userName={userName} />}
          <Menu navItems={matchesSM ? mobileNavItems : navItems} sx={classes.menu} />
          {matchesSM && (
            <LanguageSelect
              changeValue={changeValue}
              currentItem={currentItem}
              sx={classes.select}
              value={value}
            />
          )}
        </>
      ) : (
        <>
          <Menu navItems={navItems} sx={classes.menu} />
          {matchesSM && (
            <LanguageSelect
              changeValue={changeValue}
              currentItem={currentItem}
              sx={classes.select}
              value={value}
            />
          )}
        </>
      )}
    </Drawer>
  )
}
