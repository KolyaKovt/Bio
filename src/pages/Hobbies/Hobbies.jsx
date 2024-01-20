import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
  StyledVideo,
} from "../../components/Section/Section.styled";

const Hobbies = () => {
  return (
    <>
      <Section>
        <StyledH1>My hobbies.</StyledH1>
        <StyledP>I have lots of hobbies, but here are the main ones.</StyledP>
      </Section>
      <Section>
        <StyledH2>Guitar</StyledH2>
        <StyledP>
          I play guitar. I met a good guitar teacher back in Germany, and he
          taught me some guitar basics.
        </StyledP>
        <StyledVideo
          src="https://www.youtube.com/embed/DjAozIqOfO8"
          type="video/mp4"
          width="500" height="280"
        ></StyledVideo>
      </Section>
      <Section>
        <StyledH2>Volleyball</StyledH2>
        <StyledP>
          After a long day behind the computer, there's nothing better than
          playing volleyball. I play for Avior.
        </StyledP>
        <StyledImg src="/avior.jpg" alt="my team" width={1000} />
      </Section>
      <Section>
        <StyledH2>Programming</StyledH2>
        <StyledP>Actually, programming is also one of my hobbies.</StyledP>
      </Section>
    </>
  );
};

export default Hobbies;
