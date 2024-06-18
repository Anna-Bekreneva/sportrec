import { Language, getFlag } from '@/widgets/header/model'
import { Box } from '@mui/material'

export const SelectItem = (item: Partial<Language>) => {
  return (
    <Box sx={{ alignItems: 'center', display: 'flex', gap: '6px' }}>
      <Box aria-hidden component={'span'} sx={{ height: '20px', width: '20px' }}>
        {item?.value && getFlag(item.value)}
      </Box>
      {item.label}
    </Box>
  )
}
