import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledSecondaryTitle,
  StyledImg,
  StyledP,
  StyledPWithMargin,
  StyledVideo,
  StyledA,
} from "../../components/Section/Section.styled"

const Contact = () => {
  return (
    <>
      <Section>
        <StyledH1>Contact me🤙</StyledH1>
        <StyledP>Here you can find all the ways to contact me.</StyledP>
      </Section>
      <Section>
        <StyledSecondaryTitle>Gmail✉️</StyledSecondaryTitle>
        <StyledP>
          <StyledA href="mailto:kovtunets73@gmail.com">
            kovtunets73@gmail.com
          </StyledA>
        </StyledP>
        {/* <StyledVideo
          src="https://www.youtube.com/embed/DjAozIqOfO8"
          type="video/mp4"
          width="500"
          height="280"
        ></StyledVideo> */}
      </Section>
      <Section>
        <StyledSecondaryTitle>Phone📞</StyledSecondaryTitle>
        <StyledPWithMargin>
          <StyledP>
            <StyledA href="tel:+380666875479">+380 66 687 54 79</StyledA>
          </StyledP>
          <StyledP>
            <StyledA href="tel:+31683490888">+31 68 349 08 88</StyledA>
          </StyledP>
        </StyledPWithMargin>
        <picture>
          <source srcSet="avior-mobile.jpg" media="(max-width: 767px)" />

          <StyledImg src="/avior.jpg" alt="my team" width={600} />
        </picture>
      </Section>
      <Section>
        <StyledSecondaryTitle>Telegram</StyledSecondaryTitle>
        <StyledP>
          <StyledA href="https://t.me/KolyaKovt">KolyaKovt</StyledA>
        </StyledP>
      </Section>
    </>
  )
}

export default Contact
