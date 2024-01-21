import { useState } from "react";
import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";
import { StyledHeader } from "./Header.styled";
import Navigation from "../Navigation/Navigation.jsx";
import Media from "react-media";
import { SocialsAndTheme } from "../SocialsAndTheme/SocialsAndTheme.jsx";
import MobileMenuBtn from "../MobileMenuBtn/MobileMenuBtn.jsx";

const Header = () => {
  const [isBorder, setIsBorder] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <StyledHeader $isBorder={isBorder || isMobileMenuOpen}>
      <MobileMenuBtn
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <Media query={"(min-width: 768px)"} render={() => <Navigation />} />

      <SocialsAndTheme isTheme={true} />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        setIsBorder={setIsBorder}
      />
    </StyledHeader>
  );
};

export default Header;
