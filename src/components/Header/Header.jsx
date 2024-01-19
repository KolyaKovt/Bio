import { useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";

import {
  StyledHeader,
  StyledButton,
  StyledSvg,
  StyledLink,
  StyledGithubSvg,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleIsMobileOpen = () => setIsMobileMenuOpen(prev => !prev);

  const btnSvgHref = isMobileMenuOpen
    ? "/icons.svg#close-menu"
    : "/icons.svg#open-menu";

  return (
    <StyledHeader>
      <StyledButton type="button" onClick={toggleIsMobileOpen}>
        <StyledSvg>
          <use href={btnSvgHref}></use>
        </StyledSvg>
      </StyledButton>
      <StyledLink to={"https://github.com/KolyaKovt"}>
        <StyledGithubSvg>
          <use href="/icons.svg#github"></use>
        </StyledGithubSvg>
      </StyledLink>

      <MobileMenu
        toggleIsMobileOpen={toggleIsMobileOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />
    </StyledHeader>
  );
};

export default Header;
