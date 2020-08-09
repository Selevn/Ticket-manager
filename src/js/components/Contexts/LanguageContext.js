import React from "react"

export const LanguageContext = React.createContext({
  language: "en",
  toggleLanguage: () => {},
});

LanguageContext.displayName = 'LanguageContext';