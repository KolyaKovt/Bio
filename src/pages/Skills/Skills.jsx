import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledH2,
  StyledA,
  StyledLink,
  StyledP,
  StyledPWithMoreMargin,
  StyledListWithMargin,
  StyledList,
} from "../../components/Section/Section.styled"

const Skills = () => {
  return (
    <>
      <Section>
        <StyledH1>My skills and experience</StyledH1>
        <StyledP>
          Despite my age, I have gained valuable skills and experiences that set
          me apart.
        </StyledP>
      </Section>
      <Section>
        <StyledH2>C# course.</StyledH2>
        <StyledPWithMoreMargin>
          I completed a two-year C# course at{" "}
          <StyledA href="https://kitit.com.ua/" target="_blank">
            KitIt
          </StyledA>
          . I&apos;ve learned a lot there. Starting from varriables and ending
          with object-oriented programming.
        </StyledPWithMoreMargin>
        <StyledH2>Pet projects</StyledH2>
        <StyledPWithMoreMargin>
          I have numerous pet projects, and some of them I use daily. For
          instance I wrote{" "}
          <StyledA
            href="https://github.com/KolyaKovt/Vocabulary"
            target="_blank"
          >
            this one
          </StyledA>{" "}
          during my time in the C# course, and it has greatly helped me in
          learning both English and Dutch.
        </StyledPWithMoreMargin>
        <StyledH2>Team work and leadership.</StyledH2>
        <StyledPWithMoreMargin>
          Right now, I&apos;m doing a Fullstack course at{" "}
          <StyledA href="https://fullstack.lp.goit.global/us/" target="_blank">
            GoIt
          </StyledA>
          . We&apos;re covering basics like HTML, CSS, JS, React, TypeScript,
          and NodeJs. For each of these technology we work on a team project.
          I&apos;ve been a team lead twice now.
        </StyledPWithMoreMargin>
        <StyledH2>Portfolio projects</StyledH2>
        <StyledP>
          As mentioned earlier, we work on a team project for each technology we
          learn. You can check out my portfolio{" "}
          <StyledLink to={"/portfolio"}>here</StyledLink>.
        </StyledP>
      </Section>
      <Section>
        <StyledH2>Technical skills: </StyledH2>
        <StyledListWithMargin>
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>RTK</li>
          <li>Node JS</li>
        </StyledListWithMargin>
        <StyledH2>Soft skills: </StyledH2>
        <StyledList>
          <li>Hardworking</li>
          <li>Determined</li>
          <li>Ability to work both in a team and individually.</li>
          <li>Willing to learn</li>
        </StyledList>
      </Section>
    </>
  )
}

export default Skills
