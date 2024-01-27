import Section from "../../components/Section/Section"
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
  StyledPWithMargin,
  StyledA,
  StyledImgWithPadding,
} from "../../components/Section/Section.styled"

import "basiclightbox/dist/basicLightbox.min.css"
import "basiclightbox/dist/basicLightbox.min"
import * as basicLightbox from "basiclightbox"

const Portfolio = () => {
  const onImgClick = (url, alt) => {
    const closeModal = e => {
      if (e.code === "Escape") instance.close()
    }

    const instance = basicLightbox.create(
      `
      <img src="${url}" alt="${alt}" />
    `,
      {
        onShow: () => {
          document.addEventListener("keydown", closeModal)
          document.body.style.overflow = "hidden"
        },
        onClose: () => {
          document.removeEventListener("keydown", closeModal)
          document.body.style.overflow = ""
        },
      }
    )

    instance.show()
  }

  return (
    <>
      <Section>
        <StyledH1>My portfolio</StyledH1>
        <StyledP>Here you can check out the projects I&apos;ve made.</StyledP>
      </Section>
      <Section>
        <StyledH2>Web Studio</StyledH2>
        <StyledPWithMargin>
          That&apos;s the project I did during the HTML & CSS module.{" "}
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
        </StyledPWithMargin>
        <StyledImgWithPadding
          src="/Portfolio/web-studio-mobile.jpg"
          alt="web studio"
          onClick={() => onImgClick("/Portfolio/web-studio.jpg", "web studio")}
        />
        <StyledH2>Yachts Jet</StyledH2>
        <StyledPWithMargin>
          This project was also made during the HTML & CSS module. But this one
          was a team project, where I was the team lead, and as the team lead, I
          participated in all aspects of the project, but sections such as
          header and footer I made by myself.{" "}
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
        </StyledPWithMargin>
        <StyledImgWithPadding
          src="/Portfolio/jachts-jet-mobile.jpg"
          alt="jachts jet"
          onClick={() => onImgClick("/Portfolio/jachts-jet.jpg", "jachts jet")}
        />
        <StyledH2>Food Boutique</StyledH2>
        <StyledPWithMargin>
          This project was done during the JavaScript module, and what makes it
          special is that my brother and I have completed it as a duo. I made
          sections such as: Header, Hero, Filter and Products. I also made the
          Cart page.{" "}
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
        </StyledPWithMargin>
        <StyledImg
          src="/Portfolio/food-bootique-mobile.jpg"
          alt="food bootique"
          onClick={() =>
            onImgClick("/Portfolio/food-bootique.jpg", "food bootique")
          }
        />
      </Section>
    </>
  )
}

export default Portfolio
