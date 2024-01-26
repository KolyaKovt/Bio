import { ThemeContext } from "../../context/themeContext"
import { useTheme } from "../../hooks/useTheme"

export const ThemeContextProvider = ({ children }) => {
  const { toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
