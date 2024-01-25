import { useContext } from "react"
import { StyledLink, StyledSvg, StyledThemeBtn } from "../Header/Header.styled"
import { ThemeContext } from "../../context/themeContext"

export const SocialsAndTheme = ({ isTheme = false }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const themeSvg = theme === "dark" ? "/icons.svg#sun" : "/icons.svg#moon"

  return (
    <div>
      {isTheme && (
        <StyledThemeBtn onClick={toggleTheme} aria-label="toggle theme">
          <StyledSvg>
            <use href={themeSvg}></use>
          </StyledSvg>
        </StyledThemeBtn>
      )}
      <StyledLink
        href={"https://www.linkedin.com/in/mykola-kovtunets-57081329b/"}
        target="_blank"
        aria-label="linkedin"
      >
        <StyledSvg>
          <use href="/icons.svg#linkedin"></use>
        </StyledSvg>
      </StyledLink>
      <StyledLink
        href={"https://github.com/KolyaKovt"}
        target="_blank"
        aria-label="github"
      >
        <StyledSvg>
          <use href="/icons.svg#github"></use>
        </StyledSvg>
      </StyledLink>
    </div>
  )
}
