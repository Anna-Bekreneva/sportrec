import { AppRoutes, NavLink } from '@/shared'

export const navItems: NavLink[] = [
  { href: AppRoutes.MAIN, name: 'Лента' },
  { href: AppRoutes.MARKETPLACE, name: 'Маркетплейс' },
  { href: AppRoutes.RATINGS, name: 'Рейтинги' },
  { href: AppRoutes.COMPETITIONS, name: 'Cоревнования' },
  { href: AppRoutes.ORGANIZATIONS, name: 'Организации' },
]
