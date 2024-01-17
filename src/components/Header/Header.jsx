import { MobileMenu } from "../MobileMenu/MobileMenu.jsx";

import { StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <MobileMenu />
    </StyledHeader>
  );
};
