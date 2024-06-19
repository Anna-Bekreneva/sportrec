import { BurgerLine } from '@/widgets/header/ui'
import { Box, IconButton } from '@mui/material'

type Props = {
  isOpen: boolean
  openChange: (value: boolean) => void
}
export const BurgerButton = ({ isOpen, openChange }: Props) => {
  const classes = {
    box: {
      height: isOpen ? '18px' : '8px',
      position: 'relative',
      width: '18px',
    },
    lineBottom: {
      bottom: isOpen ? '50%' : 0,
      transform: isOpen ? 'rotate(-45deg) translateY(50%)' : '',
    },
    lineTop: {
      top: isOpen ? '50%' : 0,
      transform: isOpen ? 'rotate(45deg) translateY(-50%)' : '',
    },
  }

  return (
    <IconButton
      aria-controls={isOpen ? 'button-mobile-burger-menu' : undefined}
      aria-expanded={isOpen ? 'true' : 'false'}
      aria-haspopup={isOpen}
      aria-label={isOpen ? 'Открыть меню' : 'Закрыть меню'}
      id={'close-button-mobile-burger-menu'}
      onClick={() => openChange(!isOpen)}
      sx={{
        backgroundColor: 'inherit',
        height: '40px',
        position: 'relative',
        width: '40px',
        zIndex: '2000',
      }}
    >
      <Box aria-hidden sx={classes.box}>
        <BurgerLine sx={classes.lineTop} />
        <BurgerLine sx={classes.lineBottom} />
      </Box>
    </IconButton>
  )
}
