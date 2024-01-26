import { ThemeContext } from "../../context/themeContext"
import { useTheme } from "../../hooks/useTheme"

export const ThemeContextProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
