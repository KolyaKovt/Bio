import { StyledContainer, StyledSection } from "./Section.styled"

const Section = ({ children }) => {
  return (
    <StyledSection>
      <StyledContainer>{children}</StyledContainer>
    </StyledSection>
  )
}

export default Section
