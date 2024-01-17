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

  return (
    <>
      <StyledButton type="button" onClick={toggleIsMobileOpen}>
        <StyledSvg>
          {isMobileMenuOpen ? (
            <use href="/icons.svg#close-menu"></use>
          ) : (
            <use href="/icons.svg#open-menu"></use>
          )}
        </StyledSvg>
      </StyledButton>

      {isMobileMenuOpen && (
        <StyledBackdrop>
          <StyledList>
            <li>
              <StyledLink href="">Home</StyledLink>
            </li>
            <li>
              <StyledLink href="">Hobbies</StyledLink>
            </li>
            <li>
              <StyledLink href="">Skills</StyledLink>
            </li>
            <li>
              <StyledLink href="">Portfolio</StyledLink>
            </li>
          </StyledList>
        </StyledBackdrop>
      )}
    </>
  );
};
