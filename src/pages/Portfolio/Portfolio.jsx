import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
  StyledA,
} from "../../components/Section/Section.styled";

const Portfolio = () => {
  return (
    <>
      <Section>
        <StyledH1>My portfolio</StyledH1>
        <StyledP>Here you can check out the project I've made.</StyledP>
      </Section>
      <Section>
        <StyledH2>Web Studio</StyledH2>
        <StyledP>
          That's the project I made during the HTML & CSS module.{" "}
          <StyledA
            href="https://kolyakovt.github.io/web-studio-portfolio/"
            target="_blank"
          >
            LivePage
          </StyledA>
          .{" "}
          <StyledA
            href="https://github.com/KolyaKovt/web-studio-portfolio/"
            target="_blank"
          >
            Repo
          </StyledA>
          .
        </StyledP>
        <StyledImg src="/Portfolio/web-studio.png" />
      </Section>
      <Section>
        <StyledH2>Yachts Jet</StyledH2>
        <StyledP>
          This one we also made during the HTML & CSS module. But this one was a
          team project.{" "}
          <StyledA
            href="https://kolyakovt.github.io/yacht-jet-portfolio/"
            target="_blank"
          >
            LivePage
          </StyledA>
          .{" "}
          <StyledA
            href="https://github.com/KolyaKovt/yacht-jet-portfolio"
            target="_blank"
          >
            Repo
          </StyledA>
          .
        </StyledP>
        <StyledImg src="/Portfolio/jachts-jet.png" />
      </Section>
      <Section>
        <StyledH2>Food Boutique</StyledH2>
        <StyledP>
          This project was made during the JavaScript module, and what makes it
          special is that my brother and I tackled it as a dynamic duo, just the
          two of us. {" "}
          <StyledA
            href="https://yellowflash1040.github.io/FoodBoutique/"
            target="_blank"
          >
            LivePage
          </StyledA>
          .{" "}
          <StyledA
            href="https://github.com/YellowFlash1040/FoodBoutique"
            target="_blank"
          >
            Repo
          </StyledA>
          .
        </StyledP>
        <StyledImg src="/Portfolio/food-bootique.png" />
      </Section>
    </>
  );
};

export default Portfolio;
