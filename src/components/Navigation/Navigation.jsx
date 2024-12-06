import { StyledLink, StyledList } from "./Navigation.styled"

const Navigation = ({ closeMobileMenu }) => {
  return (
    <nav>
      <StyledList>
        <li>
          <StyledLink to="/" onClick={closeMobileMenu}>
            Home
          </StyledLink>
        </li>
        {/* <li>
          <StyledLink to="/portfolio" onClick={closeMobileMenu}>
            Portfolio
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/skills" onClick={closeMobileMenu}>
            Skills & Experience
          </StyledLink>
        </li> */}
        <li>
          <StyledLink to="/contact" onClick={closeMobileMenu}>
            Contact
          </StyledLink>
        </li>
      </StyledList>
    </nav>
  )
}

export default Navigation
