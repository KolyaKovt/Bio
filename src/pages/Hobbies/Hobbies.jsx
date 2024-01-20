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
        <StyledP>
          Hello there! I'm passionate about several hobbies that add spice to my
          life. Here are a few of my favorites:
        </StyledP>
      </Section>
      <Section>
        <StyledH2>Guitar🎸</StyledH2>
        <StyledP>
          I play guitar. I met a good guitar teacher back in Germany, and he
          taught me some guitar basics.
        </StyledP>
        <StyledVideo
          src="https://www.youtube.com/embed/DjAozIqOfO8"
          type="video/mp4"
          width="500"
          height="280"
        ></StyledVideo>
      </Section>
      <Section>
        <StyledH2>Volleyball🏐</StyledH2>
        <StyledP>
          After a long day behind the computer, there's nothing better than
          playing volleyball. I enjoy sports in general, but volleyball holds a
          special place for me.
        </StyledP>
        <StyledImg src="/avior.jpg" alt="my team" width={1000} />
      </Section>
      <Section>
        <StyledH2>Programming💻</StyledH2>
        <StyledP>
          Believe it or not, programming is more than just a job for me, it's a
          hobby too. Lines of code are my paint, and algorithms are my canvas. I
          not only enjoy the logical challenges but also find creative
          satisfaction in crafting solutions. There's an art to it, and I've got
          the syntax as my brush.
        </StyledP>
      </Section>
    </>
  );
};

export default Hobbies;
