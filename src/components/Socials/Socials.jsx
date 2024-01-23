import { StyledLink, StyledSvg } from "../Header/Header.styled"

export const Socials = () => {
  return (
    <>
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
    </>
  )
}
