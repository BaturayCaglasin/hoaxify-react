import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    //diller ile ilgili transaction'lar yer alır.
    en: {
      translation: {
        "Sign Up": "SignUp",
      },
    },
    tr: {
      translation: {
        "Sign Up": "Kayıt Ol",
      },
    },
  },
  //herhangi bir hata durumunda kullanılacak dil
  fallbackLng: "en",
  //kelimeleri hangi havuzdan alsın
  ns: ["translation"],
  defaultNS: "translation",
  keySeparator: false,
  interpolation: { escapeValue: false, formatSeparator: "," },
  react: {},
  wait: true,
});
export default i18n;
