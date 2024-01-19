import { useState } from "react";
import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
} from "../../components/Section/Section.styled";

const Home = () => {
  const [age] = useState(() => {
    const currentDate = new Date();
    const birthDate = new Date("2007-05-22");

    const timeDifference = currentDate - birthDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365.25);

    return years;
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
          Netherladns. It's a beatiful country in the western Europe.
        </StyledP>
        <StyledImg src={"/selfie.jpg"} alt="me" width={280} />
      </Section>
    </>
  );
};

export default Home;
