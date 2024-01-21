import Section from "../../components/Section/Section";
import {
  StyledH1,
  StyledH2,
  StyledImg,
  StyledP,
  StyledA,
} from "../../components/Section/Section.styled";

import "basiclightbox/dist/basicLightbox.min.css";
import "basiclightbox/dist/basicLightbox.min";
import * as basicLightbox from "basiclightbox";

const Portfolio = () => {
  const onImgClick = (url, alt) => {
    const closeModal = e => {
      if (e.code === "Escape") instance.close();
    };

    const instance = basicLightbox.create(
    `
      <img src="${url}" alt="${alt}" />
    `,
      {
        onShow: () => {
          document.addEventListener("keydown", closeModal);
        },
        onClose: () => {
          document.removeEventListener("keydown", closeModal);
        },
      }
    );

    instance.show();
  };

  return (
    <>
      <Section>
        <StyledH1>My portfolio</StyledH1>
        <StyledP>Here you can check out the projects I've made.</StyledP>
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
        <StyledImg
          src="/Portfolio/web-studio.png"
          alt="web studio"
          onClick={() => onImgClick("/Portfolio/web-studio.png", "web studio")}
        />
      </Section>
      <Section>
        <StyledH2>Yachts Jet</StyledH2>
        <StyledP>
          This one we also made during the HTML & CSS module. But this one was a
          team project. What sets it apart is that I was the team lead here.{" "}
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
        <StyledImg
          src="/Portfolio/jachts-jet.png"
          alt="jachts jet"
          onClick={() => onImgClick("/Portfolio/jachts-jet.png", "jachts jet")}
        />
      </Section>
      <Section>
        <StyledH2>Food Boutique</StyledH2>
        <StyledP>
          This project was made during the JavaScript module, and what makes it
          special is that my brother and I tackled it as a dynamic duo, just the
          two of us.{" "}
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
        <StyledImg
          src="/Portfolio/food-bootique.png"
          alt="food bootique"
          onClick={() =>
            onImgClick("/Portfolio/food-bootique.png", "food bootique")
          }
        />
      </Section>
    </>
  );
};

export default Portfolio;