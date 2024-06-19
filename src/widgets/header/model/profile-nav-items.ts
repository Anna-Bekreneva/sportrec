import { AppRoutes, NavLink } from '@/shared'

export const profileNavItems: NavLink[] = [
  { href: AppRoutes.PROFILE, name: 'Профиль' },
  { href: AppRoutes.SETTINGS, name: 'Настройки' },
  { href: AppRoutes.FRIENDS, name: 'Друзья' },
]
