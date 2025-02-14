import en from '~/i18n/en.json'
import zh from '~/i18n/zh.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  availableLocales: ['en', 'zh'],
  messages: {
    en,
    zh,
  },
}))
