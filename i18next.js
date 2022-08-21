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
        myProjects: "MY PROJECTS",
        view: "View",
        whatIDo: "WHAT I CAN DO",
        miscellaneous: "Miscellaneous",
        getInTouch: "GET IN TOUCH",
        reachMe: "You can reach me through,",
        sendMessage: "or you can send me a message",
        name: "Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Submit",
      },
    },
    de: {
      translation: {
        projects: "Projekte",
        skills: "Fähigkeiten",
        contact: "Kontakt",
        hello: "Hallo ich bin",
        subtitle: "React Native Entwickler",
        mainText:
          "Ich bin ein React Native Entwickler aus Deutschland NRW. Derzeit konzentriere ich mich auf die Aktualisierung meiner Apps und die Verbesserung meiner nativen Reaktionsfähigkeiten.",
        myProjects: "MEINE PROJEKTE",
        view: "Ansehen",
        whatIDo: "WAS ICH TUN KANN",
        miscellaneous: "Sonstiges",
        getInTouch: "Kontakt",
        reachMe: "Sie erreichen mich durch",
        sendMessage: "oder Sie können mir eine Nachricht senden",
        name: "Name",
        phone: "Telefon",
        email: "Email",
        subject: "Thema",
        message: "Nachricht",
        submit: "Einreichen",
      },
    },
  },
  lng: "en",
});
export default i18n;
