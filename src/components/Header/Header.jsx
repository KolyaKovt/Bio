import { useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";
import {
  StyledHeader,
  StyledButton,
  StyledSvg,
  StyledLink,
} from "./Header.styled";
import Navigation from "../Navigation/Navigation.jsx";
import Media from "react-media";

const Header = () => {
  const [isBorder, setIsBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBorder(true);
      } else {
        setIsBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleIsMobileOpen = () => setIsMobileMenuOpen(prev => !prev);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const btnSvgHref = isMobileMenuOpen
    ? "/icons.svg#close-menu"
    : "/icons.svg#open-menu";
  console.log(isBorder);
  return (
    <StyledHeader $isBorder={isBorder || isMobileMenuOpen}>
      <StyledButton type="button" onClick={toggleIsMobileOpen}>
        <StyledSvg>
          <use href={btnSvgHref}></use>
        </StyledSvg>
      </StyledButton>

      <Media query={"(min-width: 768px)"} render={() => <Navigation />} />

      <StyledLink href={"https://github.com/KolyaKovt"} target="_blank">
        <StyledSvg>
          <use href="/icons.svg#github"></use>
        </StyledSvg>
      </StyledLink>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />
    </StyledHeader>
  );
};

export default Header;
