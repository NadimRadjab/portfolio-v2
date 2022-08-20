import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        hello: `Hi, I'm`,
        subtitle: "A React Native Developer",
        mainText:
          "I'm a react native developer based in Germany NRW. Currently, I'm focused on updating my apps and improving my react native skills.",
      },
    },
    de: {
      translation: {
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        hello: "Hallo ich bin",
        subtitle: "React Native Entwickler",
        mainText:
          "Ich bin ein React Native Entwickler aus Deutschland NRW. Derzeit konzentriere ich mich auf die Aktualisierung meiner Apps und die Verbesserung meiner nativen Reaktionsfähigkeiten.",
      },
    },
  },
  lng: "en",
});
export default i18n;
