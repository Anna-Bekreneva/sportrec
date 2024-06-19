import { Box, SxProps, Theme, useTheme } from '@mui/material'

type Props = {
  sx?: SxProps<Theme>
}

export const BurgerLine = ({ sx: style }: Props) => {
  const { palette } = useTheme()

  return (
    <Box
      aria-hidden
      component={'span'}
      sx={{
        backgroundColor: palette.primary[500],
        borderRadius: '4px',
        height: '1px',
        left: 0,
        position: 'absolute',
        translate: 'transform 0.3s, top 0.3s, bottom 0.3s',
        width: '18px',
        ...style,
      }}
    />
  )
}
