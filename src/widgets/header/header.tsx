import { useState } from 'react'

import { Logo, ProfileIcon } from '@/shared'
import ava from '@/shared/assets/images/ava.png'
import { AppBar, Container, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material'

import { LanguagesValue, languageItems, languages, navItems } from './model'
import {
  BurgerButton,
  BurgerMenu,
  LanguageSelect,
  Menu,
  NotificationLink,
  ProfileDropdown,
} from './ui'

/**
 * 1) если пользователь авторизирован, то в пропсах приходит его имя,
 * в таком случае мы выводим ссылку на страницу с уведомлениями и дополнительную навигацию (dropdown)
 * 2) isNewNotifications — наличие новых уведомлений. Если true, то над иконкой с уведомлениями (колокольчик)
 * будет красня точка (пользователь должен быть авторизирован!)
 * */

type Props = {
  isNewNotifications?: boolean
  userName?: string
} // для userName и isNewNotifications установила значения по умолчанию для примера

export const Header = ({ isNewNotifications = true, userName = 'Иван' }: Props) => {
  const { breakpoints, palette } = useTheme()

  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false)
  const [languageValue, setLanguageValue] = useState<LanguagesValue>(languages.russia)
  const currentLanguage = languageItems.find(language => language.value === languageValue)
  const matchesSM = useMediaQuery(breakpoints.down('sm'))
  const matchesLG = useMediaQuery(breakpoints.down('lg'))

  return (
    <AppBar color={'inherit'} sx={{ boxShadow: 0 }}>
      <Container>
        <Toolbar component={'nav'} sx={{ gap: '24px', justifyContent: 'space-between' }}>
          <Toolbar sx={{ gap: '50px' }}>
            <Logo />
            {!matchesLG ? (
              <Menu navItems={navItems} />
            ) : (
              <BurgerMenu
                changeValue={setLanguageValue}
                currentItem={currentLanguage}
                isOpen={isOpenMobileMenu}
                src={ava}
                userName={userName}
                value={languageValue}
              />
            )}
          </Toolbar>
          <Toolbar sx={{ gap: '24px' }}>
            {!matchesSM && (
              <>
                <LanguageSelect
                  changeValue={setLanguageValue}
                  currentItem={currentLanguage}
                  value={languageValue}
                />
                {userName ? (
                  <Toolbar sx={{ gap: '16px' }}>
                    <NotificationLink isNewNotifications={isNewNotifications} />
                    <ProfileDropdown src={ava} userName={userName} />
                  </Toolbar>
                ) : (
                  <IconButton
                    aria-label={'delete'}
                    onClick={() => console.log('Модальное окно: «Вход на платформу» ')}
                    sx={{
                      backgroundColor: palette.primary[200],
                      borderRadius: '10px',
                      color: palette.primary[700],
                      height: '40px',
                      width: '40px',
                    }}
                  >
                    <ProfileIcon />
                  </IconButton>
                )}
              </>
            )}
            {matchesLG && <BurgerButton isOpen={isOpenMobileMenu} openChange={setOpenMobileMenu} />}
          </Toolbar>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
