import { useState } from "react";
import {
  StyledBackdrop,
  StyledButton,
  StyledLink,
  StyledList,
  StyledSvg,
} from "./MobileMenu.styled";

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleIsMobileOpen = () => setIsMobileMenuOpen(prev => !prev);

  const btnSvgHref = isMobileMenuOpen
    ? "/icons.svg#close-menu"
    : "/icons.svg#open-menu";

  return (
    <>
      <StyledButton type="button" onClick={toggleIsMobileOpen}>
        <StyledSvg>
          <use href={btnSvgHref}></use>
        </StyledSvg>
      </StyledButton>

      {isMobileMenuOpen && (
        <StyledBackdrop>
          <StyledList>
            <li>
              <StyledLink to="/" onClick={toggleIsMobileOpen}>
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/hobbies" onClick={toggleIsMobileOpen}>
                Hobbies
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/skills" onClick={toggleIsMobileOpen}>
                Skills
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/portfolio" onClick={toggleIsMobileOpen}>
                Portfolio
              </StyledLink>
            </li>
          </StyledList>
        </StyledBackdrop>
      )}
    </>
  );
};
