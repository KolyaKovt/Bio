import { useCallback, useEffect, useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";
import { StyledHeader, StyledButton, StyledSvg } from "./Header.styled";
import Navigation from "../Navigation/Navigation.jsx";
import Media from "react-media";
import Socials from "../Socials/Socials.jsx";

const Header = () => {
  const [isBorder, setIsBorder] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    enableScroll();
  }, []);

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

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [closeMobileMenu]);

  const toggleScroll = () => {
    if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "";
  };

  const toggleIsMobileOpen = () => {
    setIsMobileMenuOpen(prev => !prev);
    toggleScroll();
  };

  const btnSvgHref = isMobileMenuOpen
    ? "/icons.svg#close-menu"
    : "/icons.svg#open-menu";

  return (
    <StyledHeader $isBorder={isBorder || isMobileMenuOpen}>
      <StyledButton type="button" onClick={toggleIsMobileOpen}>
        <StyledSvg>
          <use href={btnSvgHref}></use>
        </StyledSvg>
      </StyledButton>

      <Media query={"(min-width: 768px)"} render={() => <Navigation />} />

      <Socials />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileMenu={closeMobileMenu}
      />
    </StyledHeader>
  );
};

export default Header;
