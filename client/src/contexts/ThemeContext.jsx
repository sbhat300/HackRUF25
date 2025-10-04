import React, { useEffect, useState, createContext, useContext } from 'react'
const defaultContext = {
  darkMode: false,
  toggleDarkMode: () => {},
  fontSize: 'medium',
  setFontSize: () => {},
  compactView: false,
  toggleCompactView: () => {},
  language: 'en',
  setLanguage: () => {},
}
const ThemeContext = createContext(defaultContext)
export const useTheme = () => useContext(ThemeContext)
export const ThemeProvider = ({ children }) => {
  // Load preferences from localStorage or use defaults
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('themeMode')
    return savedTheme === 'dark'
  })
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('fontSize') || 'medium'
  })
  const [compactView, setCompactView] = useState(() => {
    const savedView = localStorage.getItem('compactView')
    return savedView === 'true'
  })
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })
  // Update localStorage when preferences change
  useEffect(() => {
    localStorage.setItem('themeMode', darkMode ? 'dark' : 'light')
  }, [darkMode])
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])
  useEffect(() => {
    localStorage.setItem('compactView', compactView.toString())
  }, [compactView])
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleCompactView = () => setCompactView(!compactView)
  const value = {
    darkMode,
    toggleDarkMode,
    fontSize,
    setFontSize,
    compactView,
    toggleCompactView,
    language,
    setLanguage,
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}