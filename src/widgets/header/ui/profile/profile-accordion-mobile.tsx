import { ChevronIcon } from '@/shared'
import { ProfileAvatar, ProfileAvatarProps, ProfileList } from '@/widgets/header/ui'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

export const ProfileAccordionMobile = (props: ProfileAvatarProps) => {
  const { palette } = useTheme()

  const styles = {
    accordion: {
      '.MuiAccordionSummary-root.Mui-expanded, .MuiButtonBase-root': { minHeight: '52px' },
      boxShadow: 0,
      padding: '0 6px',
    },
    summary: {
      '.MuiAccordionSummary-content, .MuiAccordionSummary-content.Mui-expanded': { margin: 0 },
      '.MuiToolbar-root': { minHeight: '52px' },
      padding: 0,
    },
  }

  return (
    <Accordion sx={styles.accordion}>
      <AccordionSummary
        aria-controls={'panel1-content'}
        expandIcon={<ChevronIcon />}
        id={'panel1-header'}
        sx={styles.summary}
      >
        <Toolbar sx={{ gap: '10px' }}>
          <ProfileAvatar {...props} />
          <Typography color={palette.primary[400]} variant={'body1'}>
            Мой профиль
          </Typography>
        </Toolbar>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingBlock: 0 }}>
        <List>
          <ProfileList />
        </List>
      </AccordionDetails>
    </Accordion>
  )
}
