import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
} from "../../components/Section/Section.styled"

const Home = () => {
  return (
    <>
      <Section>
        <StyledH1>Welcome to my bio website!</StyledH1>
        <StyledP>
          Here you can get to know me better as a person and as a programmer. I
          hope you like it.
        </StyledP>
      </Section>
      <Section>
        <StyledH2>So who am I?</StyledH2>
        <StyledP>
          My name is Kolya. I&apos;ve been coding since I was 13. My first
          programming language is C#. I speak four languages: Russian (native),
          Ukrainian (native), English (b2) and Dutch (b2).
        </StyledP>
        <StyledImg src={"/selfie.jpg"} alt="me" width={280} />
      </Section>
    </>
  )
}

export default Home
