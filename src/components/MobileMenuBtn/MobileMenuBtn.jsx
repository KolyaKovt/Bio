import { StyledButton, StyledSvg } from "../Header/Header.styled";

const MobileMenuBtn = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
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
    <StyledButton
      type="button"
      onClick={toggleIsMobileOpen}
      aria-label="toggle mobile menu"
    >
      <StyledSvg>
        <use href={btnSvgHref}></use>
      </StyledSvg>
    </StyledButton>
  );
};

export default MobileMenuBtn;
