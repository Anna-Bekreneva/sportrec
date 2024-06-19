import { ChevronIcon } from '@/shared'
import { Language, LanguagesValue, languageItems } from '@/widgets/header/model'
import { SelectItem } from '@/widgets/header/ui'
import { FormControl, InputLabel, MenuItem, Select, SxProps, Theme, useTheme } from '@mui/material'
import { visuallyHidden } from '@mui/utils'

export type LanguageSelectProps = {
  changeValue: (value: LanguagesValue) => void
  currentItem?: Language
  sx?: SxProps<Theme>
  value: LanguagesValue
}

export const LanguageSelect = ({
  changeValue,
  currentItem,
  sx: style,
  value,
}: LanguageSelectProps) => {
  const { palette } = useTheme()

  const styles = {
    select: {
      '.MuiOutlinedInput-notchedOutline': { border: 0, padding: 0 },
      '.css-19xtc65-MuiSelect-icon': {
        color: palette.primary[400],
        top: '50%',
        transform: 'translateY(-50%)',
      },
      '::before': { display: 'none' },
      boxShadow: 'none',
      ...style,
    },
  }

  return (
    <FormControl>
      <InputLabel id={'language-select-label'} style={visuallyHidden}>
        Выберите язык
      </InputLabel>
      <Select
        IconComponent={ChevronIcon}
        id={'language-select'}
        labelId={'language-select-label'}
        onChange={event => changeValue(event.target.value as LanguagesValue)}
        renderValue={() => <SelectItem {...currentItem} />}
        style={{ marginTop: 0 }}
        sx={styles.select}
        value={value}
        variant={'standard'}
      >
        {languageItems.map(item => (
          <MenuItem key={item.value} value={item.value}>
            <SelectItem {...item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
