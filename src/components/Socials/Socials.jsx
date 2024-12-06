import { StyledLink, StyledSvg } from "../Header/Header.styled"

export const Socials = () => {
  return (
    <>
      <StyledLink
        href={"https://youtube.com/@kolyakovt/"}
        target="_blank"
        aria-label="youtube"
      >
        <StyledSvg>
          <use href="/icons.svg#youtube"></use>
        </StyledSvg>
      </StyledLink>
      <StyledLink
        href={"https://www.tiktok.com/@kolyakovt"}
        target="_blank"
        aria-label="tiktok"
      >
        <StyledSvg>
          <use href="/icons.svg#tiktok"></use>
        </StyledSvg>
      </StyledLink>
    </>
  )
}
