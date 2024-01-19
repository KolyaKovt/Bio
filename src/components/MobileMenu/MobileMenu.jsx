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
