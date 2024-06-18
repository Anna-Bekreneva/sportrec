export type LanguagesValue = (typeof languages)[keyof typeof languages]

export const languages = {
  russia: 'rs',
  serbia: 'ru',
} as const

export type Language = {
  label: string
  value: LanguagesValue
}
export const languageItems: Language[] = [
  { label: 'RU', value: languages.russia },
  { label: 'RS', value: languages.serbia },
]
