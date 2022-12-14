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
          "I'm a React Native developer based in Germany NRW. Currently, I'm focused on updating my apps and improving my React Native skills.",
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
          "Simple CV is a CV and Cover Letter creator app made with React  Native and Expo Bare Workflow that utilizes the expo-print  system to generate a Resume in a  pdf format provided through an HTMLString. The app allows the user to choose a template to fill up his information, and edit margins, font family, text sizes, border sizes, and colors.",
        ptManagerText: `PT-Manager is an app made for personal trainers to help them manage their clients. The app allows the user to create clients, services, appointments, invoices, and sessions that are designed specifically for personal trainers. The user can track the clients' weight, calorie intake, and strength. The app also allows the user to create his personal fitness flyer to promote himself.`,
        simpleInvoiceText: `Simple Invoice is an app made for freelancers and small business owners to help them manage their clients and create invoices. The app allows the user to create invoices, estimates, clients, products, and appointments. The user can change the currency symbol and time format. The app allows the user to style the invoices by editing the text font, text colors, margins, and borders.`,
        odinBookText:
          "The OdinBook is a full-stack web app inspired by Facebook. Users can create an account, make a post, like a post, make comments  create a post with images, adds friends edit the profile image, and live chat with other users.",
        thankYou: "Thank you for your submission.",
        goBack: "go back",
      },
    },
    de: {
      translation: {
        projects: "Projekte",
        skills: "F??higkeiten",
        contact: "Kontakt",
        hello: "Hallo ich bin",
        subtitle: "React Native Entwickler",
        mainText:
          "Ich bin ein React Native Entwickler aus Deutschland NRW. Derzeit konzentriere ich mich auf die Aktualisierung meiner Apps und die Verbesserung meiner React Native F??higkeiten.",
        myProjects: "Meine Arbeit",
        view: "Ansehen",
        whatIDo: "technische F??higkeiten",
        miscellaneous: "Sonstiges",
        getInTouch: "Kontakt",
        reachMe: "Sie erreichen mich durch",
        sendMessage: "oder Sie k??nnen mir eine Nachricht senden",
        name: "Name",
        phone: "Telefon",
        email: "Email",
        subject: "Thema",
        message: "Nachricht",
        submit: "Einreichen",
        overview: "??berblick",
        technologies: "Technologien",
        onRequest: "Auf Anfrage",
        simpleCvText:
          "Simple CV ist eine App zur Erstellung von Lebensl??ufen und Anschreiben, die mit React Native und Expo Bare Workflow erstellt wurde und den Expo-Print verwendet System zum Generieren eines Lebenslaufs in einem PDF-Format, das ??ber einen HTMLString bereitgestellt wird. Die App erm??glicht es dem Benutzer, eine Vorlage zum Ausf??llen seiner Informationen auszuw??hlen und R??nder, Schriftfamilien, Textgr????en, Rahmengr????en und Farben zu bearbeiten.",
        ptManagerText: `PT-Manager ist eine App f??r Personal Trainer, die ihnen hilft, ihre Kunden zu verwalten. Die App erm??glicht es dem Benutzer, Kunden, Dienstleistungen, Termine, Rechnungen und Sitzungen zu erstellen, die speziell f??r Personal Trainer entwickelt wurden. Der Benutzer kann das Gewicht, die Kalorienaufnahme und die Kraft des Kunden verfolgen. Die App erm??glicht es dem Benutzer auch, seinen pers??nlichen Fitness-Flyer zu erstellen, um f??r sich selbst zu werben.`,
        simpleInvoiceText: `Simple Invoice ist eine App f??r Freiberufler und Kleinunternehmer, die ihnen hilft, ihre Kunden zu verwalten und Rechnungen zu erstellen. Die App erm??glicht es dem Benutzer, Rechnungen, Kostenvoranschl??ge, Kunden, Produkte und Termine zu erstellen. Der Benutzer kann das W??hrungssymbol und das Zeitformat ??ndern. Die App erm??glicht es dem Benutzer, die Rechnungen zu gestalten, indem er die Schriftart, Textfarben, R??nder und Rahmen bearbeitet.`,
        odinBookText:
          "Das OdinBook ist eine von Facebook inspirierte Full-Stack-Web-App. Benutzer k??nnen ein Konto erstellen, einen Beitrag erstellen, einen Beitrag liken, Kommentare abgeben einen Beitrag mit Bildern erstellen, Freunde hinzuf??gen, das Profilbild bearbeiten, und Live-Chat mit anderen Benutzern.",
        thankYou: "Danke f??r deine Nachricht.",
        goBack: "Zur??ck",
      },
    },
  },
  lng: "en",
});
export default i18n;
