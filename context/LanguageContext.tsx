import React, { createContext, ReactNode, useState } from "react";
const LanguageContext = createContext({});
interface Props {
  children: ReactNode;
}
export function LanguageProvider(props: Props) {
  const [languges, setLanguages] = useState({
    en: {},
    de: {},
  });
  const handleLanguage = () => {};
  return (
    <LanguageContext.Provider value={{ ...languges }}>
      {props.children}
    </LanguageContext.Provider>
  );
}
export default LanguageContext;
