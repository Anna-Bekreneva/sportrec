import { useState } from 'react'

import { ChevronIcon } from '@/shared'
import { LanguagesValue, languageItems, languages } from '@/widgets/header/model'
import { FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material'
import { visuallyHidden } from '@mui/utils'

import { SelectItem } from './language-select-item'

export const LanguageSelect = () => {
  const { palette } = useTheme()
  const [value, setValue] = useState<LanguagesValue>(languages.russia)

  const currentLabel = languageItems.find(language => language.value === value)

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
        onChange={event => setValue(event.target.value as LanguagesValue)}
        renderValue={() => <SelectItem {...currentLabel} />}
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
