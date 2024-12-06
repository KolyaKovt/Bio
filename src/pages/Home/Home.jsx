import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledSecondaryTitle,
  StyledImg,
  StyledP,
  StyledPWithMargin,
} from "../../components/Section/Section.styled"

const Home = () => {
  return (
    <>
      <Section>
        <StyledH1>Welcome to my Artist website!👋</StyledH1>
        <StyledP>
          Here you can get to know me better as a person and as a musician. I
          hope you like it.🤗
        </StyledP>
      </Section>
      <Section>
        <StyledSecondaryTitle>So who am I?🤔</StyledSecondaryTitle>
        <StyledPWithMargin>
          My name is Kolya. I&apos;m a musician from Ukraine and now I&apos;m a refugee in the Netherlands. My full name is Mykola Kovtunets, but you could know me as KolyaKovt.
        </StyledPWithMargin>
        <StyledImg src={"/selfie.jpg"} alt="me" width={280} />
      </Section>
    </>
  )
}

export default Home
