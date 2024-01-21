import { useCallback, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { StyledBackdrop } from "./MobileMenu.styled";

export const MobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  setIsBorder,
}) => {
  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    enableScroll();
  }, [setIsMobileMenuOpen]);

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
  }, [setIsBorder]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [closeMobileMenu]);

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
