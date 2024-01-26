import { ThemeContext } from "../../context/themeContext"
import { useTheme } from "../../hooks/useTheme"
import { GlobalStyle } from "../../styles/GlobalStyle";
import { theme } from "../../styles/theme"
import { ThemeProvider } from "styled-components";


export const ThemeContextProvider = ({ children }) => {
  const { theme: themeColor, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme[themeColor]}>{children}</ThemeProvider>
      <GlobalStyle />
    </ThemeContext.Provider>
  )
}
