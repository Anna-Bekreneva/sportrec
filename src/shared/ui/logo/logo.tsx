import { Link as RouterLink } from 'react-router-dom'

import { AppRoutes } from '@/shared'
import { Link } from '@mui/material'

export const Logo = () => {
  return (
    <Link component={RouterLink} to={AppRoutes.MAIN}>
      <img alt={'Логотип'} height={32} src={'./logo.svg'} width={130} />
    </Link>
  )
}
