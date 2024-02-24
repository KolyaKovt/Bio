import Section from "../../components/Section/Section"
import {
  StyledImg,
  StyledPWithMargin,
  StyledA,
  StyledProjectsList,
  StyledPrimaryTitleH2,
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
        <h1 className="visually-hidden">My portfolio</h1>

        <StyledProjectsList>
          <li>
            <StyledPrimaryTitleH2>EXPENSETRACKER</StyledPrimaryTitleH2>
            <StyledPWithMargin>
              EXPENSETRACKER is an app to track your incomes and expenses.
              It&apos;s the last team project we did during React in GoIT. I was
              responsible for the Redux and Home page.{" "}
              <StyledA
                href="https://project-capybara-66-rust.vercel.app"
                target="_blank"
              >
                LivePage
              </StyledA>
              .{" "}
              <StyledA
                href="https://github.com/ZhurbeyArtem/project-Capybara-66"
                target="_blank"
              >
                Repo
              </StyledA>
              .
            </StyledPWithMargin>
            <StyledImg
              src="/Portfolio/expensetracker.jpg"
              alt="expensetracker"
              onClick={() =>
                onImgClick("/Portfolio/expensetracker.jpg", "expensetracker")
              }
            />
          </li>
          <li>
            <StyledPrimaryTitleH2>Vocabulry</StyledPrimaryTitleH2>
            <StyledPWithMargin>
              As someone who&apos;s been in a situation when you have to learn a
              language I understand how hard it can be. So I decided to create
              an app for learning words. My family and I use it on a daily
              basis.{" "}
              <StyledA
                href="https://react-local-vocabulary.vercel.app"
                target="_blank"
              >
                LivePage
              </StyledA>
              .{" "}
              <StyledA
                href="https://github.com/KolyaKovt/react-local-vocabulary"
                target="_blank"
              >
                Repo
              </StyledA>
              .
            </StyledPWithMargin>
            <StyledImg
              src="/Portfolio/vocabulary.jpg"
              alt="vocabulary"
              onClick={() =>
                onImgClick("/Portfolio/vocabulary.jpg", "vocabulary")
              }
            />
          </li>
          <li>
            <StyledPrimaryTitleH2>Food Boutique</StyledPrimaryTitleH2>
            <StyledPWithMargin>
              To me that project was special. My brother and I did it as a duo.
              The project was designed for more people, but because of the
              circumstances we decided do do that ourselves.{" "}
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
          </li>
          <li>
            <StyledPrimaryTitleH2>Yachts Jet</StyledPrimaryTitleH2>
            <StyledPWithMargin>
              Yachts Jet is a team project that was completed during the GoIT
              course. What sets it apart is that I served as the team lead for
              the first time on this project. As the team lead, I participated
              in each section, but I completed sections such as the Header and
              Footer myself.{" "}
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
            <StyledImg
              src="/Portfolio/jachts-jet-mobile.jpg"
              alt="jachts jet"
              onClick={() =>
                onImgClick("/Portfolio/jachts-jet.jpg", "jachts jet")
              }
            />
          </li>
          <li>
            <StyledPrimaryTitleH2>Web Studio</StyledPrimaryTitleH2>
            <StyledPWithMargin>
              Web Studio is a project I did during the GoIT course. It&apos;s a
              simple responsive website. On this project I honed my HTML&CSS
              skills.{" "}
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
            <StyledImg
              src="/Portfolio/web-studio-mobile.jpg"
              alt="web studio"
              onClick={() =>
                onImgClick("/Portfolio/web-studio.jpg", "web studio")
              }
            />
          </li>
        </StyledProjectsList>
      </Section>
    </>
  )
}

export default Portfolio
