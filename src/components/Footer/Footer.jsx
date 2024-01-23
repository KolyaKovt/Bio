import { FooterSocials } from "../FooterSocials/FooterSocials";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&#169; KolyaKovt</p>
      <FooterSocials />
    </StyledFooter>
  );
};

export default Footer;
