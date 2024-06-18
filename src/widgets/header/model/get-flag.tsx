import { RussiaFlagIcon, SerbiaFlagIcon } from '@/shared'

import { LanguagesValue, languages } from './'

export const getFlag = (value: LanguagesValue) => {
  switch (value) {
    case languages.russia:
      return <RussiaFlagIcon />
    case languages.serbia:
      return <SerbiaFlagIcon />
  }
}
