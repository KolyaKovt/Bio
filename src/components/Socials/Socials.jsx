import { StyledLink, StyledSvg } from "../Header/Header.styled";

const Socials = () => {
  return (
    <div>
      <StyledLink
        href={"https://www.linkedin.com/in/mykola-kovtunets-57081329b/"}
        target="_blank"
      >
        <StyledSvg>
          <use href="/icons.svg#linkedin"></use>
        </StyledSvg>
      </StyledLink>
      <StyledLink href={"https://github.com/KolyaKovt"} target="_blank">
        <StyledSvg>
          <use href="/icons.svg#github"></use>
        </StyledSvg>
      </StyledLink>
    </div>
  );
};

export default Socials;
