import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
  StyledVideo,
} from "../../components/Section/Section.styled"

const Hobbies = () => {
  return (
    <>
      <Section>
        <StyledH1>My hobbies.</StyledH1>
        <StyledP>
          Hello there! I have lots of hobbies, but here are the main ones:
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
          After a long day behind the computer, there&apos;s nothing better than
          playing volleyball. I enjoy sports in general, but volleyball holds a
          special place for me.
        </StyledP>
        <picture>
          <source srcSet="avior-mobile.jpg" media="(max-width: 767px)" />

          <StyledImg src="/avior.jpg" alt="my team" width={600} />
        </picture>
      </Section>
      <Section>
        <StyledH2>Programming💻</StyledH2>
        <StyledP>
          Believe it or not, programming is more than just a job for me, it&apos;s a
          hobby too. I like beeing able to change something on a computer, make
          it work different.
        </StyledP>
      </Section>
    </>
  )
}

export default Hobbies
