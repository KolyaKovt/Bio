import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledP,
} from "../../components/Section/Section.styled";

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
        <StyledP>My name is Kolya. I'm 16 and I'm from Ukraine.</StyledP>
      </Section>
    </>
  );
};

export default Home;
