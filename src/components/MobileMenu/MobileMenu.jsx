import Navigation from "../Navigation/Navigation";
import { StyledBackdrop } from "./MobileMenu.styled";

export const MobileMenu = ({ isMobileMenuOpen, closeMobileMenu }) => {
  return (
    <>
      {isMobileMenuOpen && (
        <StyledBackdrop>
          <Navigation closeMobileMenu={closeMobileMenu} />
        </StyledBackdrop>
      )}
    </>
  );
};
