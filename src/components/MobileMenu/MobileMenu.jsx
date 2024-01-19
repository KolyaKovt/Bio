import {
  StyledBackdrop,
  StyledLink,
  StyledList,
} from "./MobileMenu.styled";

export const MobileMenu = ({ isMobileMenuOpen, toggleIsMobileOpen }) => {
  return (
    <>
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
