import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import enJSON from './en.json'
import ruJSON from './ru.json'
import noJSON from './no.json'

const resources = {
  en: { translation: enJSON },
  ru: { translation: ruJSON },
  no: { translation: noJSON },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
