import { useContext } from "react"
import { StyledSvg, StyledThemeBtn } from "../Header/Header.styled"
import { ThemeContext } from "../../context/themeContext"
import { Socials } from "../Socials/Socials"

export const HeaderSocials = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const themeSvg = theme === "dark" ? "/icons.svg#sun" : "/icons.svg#moon"

  return (
    <div>
      <StyledThemeBtn onClick={toggleTheme} aria-label="toggle theme">
        <StyledSvg>
          <use href={themeSvg}></use>
        </StyledSvg>
      </StyledThemeBtn>
      <Socials />
    </div>
  )
}
