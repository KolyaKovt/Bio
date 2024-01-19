import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";

import { StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <MobileMenu />
    </StyledHeader>
  );
};

export default Header;
