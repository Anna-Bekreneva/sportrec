import { Logo } from '@/shared'
import ava from '@/shared/assets/images/ava.png'
import { AppBar, Container, Toolbar } from '@mui/material'

import { navItems } from './model'
import { LanguageSelect, Menu, NotificationLink, ProfileDropdown } from './ui'

/**
 * 1) если пользователь авторизирован, то в пропсах приходит его имя,
 * в таком случае мы выводим ссылку на страницу с уведомлениями и дополнительную навигацию (dropdown)
 * 2) isNewNotifications — наличие новых уведомлений. Если true, то над иконкой с уведомлениями (колокольчик)
 * будет красня точка (пользователь должен быть авторизирован!)
 * */

type Props = {
  isNewNotifications: boolean
  userName?: string
}

// для userName и isNewNotifications установила значения по умолчанию для примера
export const Header = ({ isNewNotifications = true, userName = 'Иван' }: Props) => {
  return (
    <AppBar color={'inherit'} sx={{ boxShadow: 0 }}>
      <Container>
        <Toolbar component={'nav'} sx={{ gap: '24px', justifyContent: 'space-between' }}>
          <Toolbar sx={{ gap: '50px' }}>
            <Logo />
            <Menu navItems={navItems} />
          </Toolbar>
          <Toolbar sx={{ gap: '24px' }}>
            <LanguageSelect />
            {userName && (
              <Toolbar sx={{ gap: '16px' }}>
                <NotificationLink isNewNotifications={isNewNotifications} />
                <ProfileDropdown src={ava} userName={userName} />
              </Toolbar>
            )}
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
