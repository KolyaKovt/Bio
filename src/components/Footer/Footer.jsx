import { SocialsAndTheme } from "../SocialsAndTheme/SocialsAndTheme";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&#169; KolyaKovt</p>
      <SocialsAndTheme />
    </StyledFooter>
  );
};

export default Footer;
