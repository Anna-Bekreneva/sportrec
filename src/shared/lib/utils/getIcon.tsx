import {
  AppRoutes,
  BellIcon,
  BuildingIcon,
  HomeIcon,
  ShoppingBagIcon,
  TrophyIcon,
  UsersIcon,
} from '@/shared'

export const getIcon = (href: string) => {
  switch (href) {
    case AppRoutes.MAIN:
      return <HomeIcon />
    case AppRoutes.RATINGS:
      return <UsersIcon />
    case AppRoutes.MARKETPLACE:
      return <ShoppingBagIcon />
    case AppRoutes.COMPETITIONS:
      return <TrophyIcon />
    case AppRoutes.ORGANIZATIONS:
      return <BuildingIcon />
    case AppRoutes.NOTIFICATIONS:
      return <BellIcon />
    default:
      return null
  }
}
