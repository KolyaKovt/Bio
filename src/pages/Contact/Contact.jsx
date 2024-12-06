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
        <StyledP>
          <StyledP>
            <StyledA href="tel:+380666875479">+380 66 687 54 79</StyledA>
          </StyledP>
          <StyledP>
            <StyledA href="tel:+31683490888">+31 68 349 08 88</StyledA>
          </StyledP>
        </StyledP>
        {/* <picture>
          <source srcSet="avior-mobile.jpg" media="(max-width: 767px)" />

          <StyledImg src="/avior.jpg" alt="my team" width={600} />
        </picture> */}
      </Section>
      <Section>
        <StyledSecondaryTitle>
          Telegram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            id="telegram"
            width={40}
            style={{ left: 10, bottom: -10, position: "relative" }}
          >
            <circle cx="12" cy="12" r="12" fill="#039be5"></circle>
            <path
              fill="#fff"
              d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"
            ></path>
          </svg>
        </StyledSecondaryTitle>
        <StyledP>
          <StyledA href="https://t.me/KolyaKovt">KolyaKovt</StyledA>
        </StyledP>
      </Section>
      <Section>
        <StyledSecondaryTitle>
          WhatsApp
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="whatsapp"
            width="40"
            height="40"
            viewBox="0 0 102 102"
            style={{ left: 10, bottom: -10, position: "relative" }}
          >
            <defs>
              <linearGradient
                id="a"
                x1=".5"
                x2=".5"
                y2="1"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0" stop-color="#61fd7d"></stop>
                <stop offset="1" stop-color="#2bb826"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#a)"
              d="M101.971 77.094c0 .558-.017 1.77-.051 2.705a53.717 53.717 0 0 1-.538 6.589 21.949 21.949 0 0 1-1.847 5.521 19.654 19.654 0 0 1-8.653 8.644 21.993 21.993 0 0 1-5.552 1.847 53.913 53.913 0 0 1-6.539.528c-.936.033-2.148.05-2.7.05l-50.223-.008c-.558 0-1.769-.017-2.705-.051a53.744 53.744 0 0 1-6.589-.538 21.951 21.951 0 0 1-5.521-1.847A19.654 19.654 0 0 1 2.4 91.881a21.988 21.988 0 0 1-1.843-5.552 53.954 53.954 0 0 1-.528-6.539 92.845 92.845 0 0 1-.05-2.7l.008-50.224c0-.558.017-1.77.051-2.705a53.738 53.738 0 0 1 .538-6.589 21.946 21.946 0 0 1 1.847-5.521A19.655 19.655 0 0 1 11.076 3.4a22 22 0 0 1 5.552-1.848 53.912 53.912 0 0 1 6.539-.528c.936-.033 2.148-.05 2.7-.05l50.228.012c.559 0 1.77.017 2.705.051a53.744 53.744 0 0 1 6.589.538 21.946 21.946 0 0 1 5.521 1.847 19.653 19.653 0 0 1 8.644 8.653 21.988 21.988 0 0 1 1.848 5.552 53.974 53.974 0 0 1 .528 6.539c.033.936.05 2.148.05 2.7l-.008 50.223Z"
              transform="translate(.021 -.978)"
            ></path>
            <g>
              <path
                fill="#fff"
                d="M78.02 24.131A36.58 36.58 0 0 0 20.452 68.25l-5.189 18.948 19.39-5.085a36.561 36.561 0 0 0 17.479 4.451h.015A36.578 36.578 0 0 0 78.02 24.131ZM52.15 80.388h-.012a30.361 30.361 0 0 1-15.473-4.236l-1.11-.659-11.506 3.017 3.071-11.215-.723-1.15a30.4 30.4 0 1 1 25.754 14.242Zm16.67-22.761c-.914-.457-5.407-2.668-6.245-2.973s-1.447-.457-2.056.457-2.361 2.973-2.894 3.582-1.066.686-1.98.229a24.963 24.963 0 0 1-7.349-4.535 27.531 27.531 0 0 1-5.084-6.329c-.533-.915-.057-1.409.4-1.865.411-.409.914-1.067 1.371-1.6a6.23 6.23 0 0 0 .914-1.524 1.682 1.682 0 0 0-.076-1.6c-.228-.457-2.056-4.954-2.818-6.783-.742-1.782-1.5-1.541-2.056-1.568a36.004 36.004 0 0 0-1.752-.032 3.358 3.358 0 0 0-2.437 1.143 10.246 10.246 0 0 0-3.2 7.622c0 4.5 3.275 8.841 3.732 9.451s6.444 9.838 15.612 13.8a52.582 52.582 0 0 0 5.21 1.925 12.535 12.535 0 0 0 5.756.362c1.756-.262 5.407-2.21 6.169-4.344a7.635 7.635 0 0 0 .533-4.344c-.229-.381-.838-.61-1.752-1.067Z"
              ></path>
            </g>
          </svg>
        </StyledSecondaryTitle>
        <StyledP>
          <StyledA href="https://wa.me/380666875479">KolyaKovt</StyledA>
        </StyledP>
      </Section>
    </>
  )
}

export default Contact
