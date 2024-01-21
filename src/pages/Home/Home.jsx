import { useState } from "react";
import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
} from "../../components/Section/Section.styled";
import { countBirthYear } from "../../helpers/count-birth-year";

const Home = () => {
  const [age] = useState(() => {
    return countBirthYear("2007-05-22");
  });

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
          My name is Kolya. I'm {age} and I'm from Kharkiv (Ukraine). I live in
          the Netherladns. It's a beatiful country in the western Europe.
        </StyledP>
        <StyledImg src={"/selfie.jpg"} alt="me" width={280} />
      </Section>
    </>
  );
};

export default Home;
