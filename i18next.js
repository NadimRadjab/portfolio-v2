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
        myProjects: "My Work",
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
        overview: "Overview",
        technologies: "Technologies",
        onRequest: "On Request",
        simpleCvText:
          "Simple CV is a CV and Cover Letter creator application made with React  Native and Expo Bare Workflow that utilizes the expo-print  system to generate a Resume in a  pdf format provided through an HTMLString. The application allows the user to choose a template to fill up his information, and edit margins, font family, text sizes, border sizes, and colors.",
        ptManagerText: `PT-Manager is an application made for personal trainers to help them manage their clients. The application allows the user to create clients, services, appointments, invoices, and sessions that are designed specifically for personal trainers. The user can track the clients' weight, calorie intake, and strength. The application also allows the user to create his personal fitness flyer to promote himself.`,
        simpleInvoiceText: `Simple Invoice is an application made for freelancers and small business owners to help them manage their clients and create invoices. The application allows the user to create clients, products, appointments, and invoices. `,
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
        myProjects: "Meine Arbeit",
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
        overview: "Überblick",
        technologies: "Technologien",
        onRequest: "Auf Anfrage",
        simpleCvText:
          "Simple CV ist eine App zur Erstellung von Lebensläufen und Anschreiben, die mit React Native und Expo Bare Workflow erstellt wurde und den Expo-Print verwendet System zum Generieren eines Lebenslaufs in einem PDF-Format, das über einen HTMLString bereitgestellt wird. Die App ermöglicht es dem Benutzer, eine Vorlage zum Ausfüllen seiner Informationen auszuwählen und Ränder, Schriftfamilien, Textgrößen, Rahmengrößen und Farben zu bearbeiten.",
        ptManagerText: `PT-Manager ist eine App für Personal Trainer, die ihnen hilft, ihre Kunden zu verwalten. Die App ermöglicht es dem Benutzer, Kunden, Dienstleistungen, Termine, Rechnungen und Sitzungen zu erstellen, die speziell für Personal Trainer entwickelt wurden. Der Benutzer kann das Gewicht, die Kalorienaufnahme und die Kraft des Kunden verfolgen. Die App ermöglicht es dem Benutzer auch, seinen persönlichen Fitness-Flyer zu erstellen, um für sich selbst zu werben.`,
        simpleInvoiceText: ``,
      },
    },
  },
  lng: "en",
});
export default i18n;
