import Section from "../../components/Section/Section"
import {
  StyledA,
  StyledLink,
  StyledP,
  StyledList,
  StyledPrimaryTitleH2,
  StyledSkillsList,
} from "../../components/Section/Section.styled"

const Skills = () => {
  return (
    <>
      <Section>
        <h1 className="visually-hidden">My skills and experiences</h1>

        <StyledSkillsList>
          <li>
            <StyledPrimaryTitleH2>C# course</StyledPrimaryTitleH2>
            <StyledP>
              I completed a two-year C# course at{" "}
              <StyledA href="https://kitit.com.ua/" target="_blank">
                KitIt
              </StyledA>
              . I learned a lot there, starting from variables and ending with
              object-oriented programming.
            </StyledP>
          </li>
          <li>
            <StyledPrimaryTitleH2>Pet projects</StyledPrimaryTitleH2>
            <StyledP>
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
            </StyledP>
          </li>
          <li>
            <StyledPrimaryTitleH2>
              Team work and leadership
            </StyledPrimaryTitleH2>
            <StyledP>
              Right now, I&apos;m doing a Fullstack course at{" "}
              <StyledA
                href="https://fullstack.lp.goit.global/us/"
                target="_blank"
              >
                GoIt
              </StyledA>
              . We&apos;re covering basics like HTML, CSS, JS, React,
              TypeScript, and NodeJs. For each of these technology we work on a
              team project. I&apos;ve been a team lead twice now.
            </StyledP>
          </li>
          <li>
            <StyledPrimaryTitleH2>Portfolio projects</StyledPrimaryTitleH2>
            <StyledP>
              As mentioned earlier, we work on a team project for each
              technology we learn. You can check out my portfolio{" "}
              <StyledLink to={"/portfolio"}>here</StyledLink>.
            </StyledP>
          </li>
          <li>
            <StyledPrimaryTitleH2>Technical skills: </StyledPrimaryTitleH2>
            <StyledList>
              <li>HTML & CSS / Tailwind</li>
              <li>React / RTK</li>
              <li>JavaScript / TypeScript</li>
              <li>Node.js / Express.js</li>
              <li>Vite</li>
              <li>SQL, MongoDB</li>
            </StyledList>
          </li>
          <li>
            <StyledPrimaryTitleH2>Soft skills: </StyledPrimaryTitleH2>
            <StyledList>
              <li>Hardworking</li>
              <li>Determined</li>
              <li>Ability to work both in a team and individually.</li>
              <li>Willing to learn</li>
            </StyledList>
          </li>
        </StyledSkillsList>
      </Section>
    </>
  )
}

export default Skills
