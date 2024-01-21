import { useEffect, useState } from "react";
import { StyledLink, StyledSvg, StyledThemeBtn } from "../Header/Header.styled";

export const SocialsAndTheme = ({ isTheme = false }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#23272f"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#149eca"
      );
      document.documentElement.style.setProperty("--text-color", "#f6f7f9");
      document.documentElement.style.setProperty(
        "--btn-focus-color",
        "#2d323b"
      );
      document.documentElement.style.setProperty("--border-color", "#343a46");
    } else {
      document.documentElement.style.setProperty(
        "--primary-bg-color",
        "#FFFFFF"
      );
      document.documentElement.style.setProperty(
        "--secondary-bg-color",
        "#149eca"
      );
      document.documentElement.style.setProperty("--text-color", "#23272f");
      document.documentElement.style.setProperty("--paragraph-color", "23272F");
      document.documentElement.style.setProperty(
        "--btn-focus-color",
        "#E6F7FF"
      );
      document.documentElement.style.setProperty("--border-color", "#EBECF0");
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const themeSvg = theme === "dark" ? "/icons.svg#sun" : "/icons.svg#moon";

  return (
    <div>
      {isTheme && (
        <StyledThemeBtn onClick={toggleTheme} aria-label="toggle theme">
          <StyledSvg>
            <use href={themeSvg}></use>
          </StyledSvg>
        </StyledThemeBtn>
      )}
      <StyledLink
        href={"https://www.linkedin.com/in/mykola-kovtunets-57081329b/"}
        target="_blank"
        aria-label="linkedin"
      >
        <StyledSvg>
          <use href="/icons.svg#linkedin"></use>
        </StyledSvg>
      </StyledLink>
      <StyledLink
        href={"https://github.com/KolyaKovt"}
        target="_blank"
        aria-label="github"
      >
        <StyledSvg>
          <use href="/icons.svg#github"></use>
        </StyledSvg>
      </StyledLink>
    </div>
  );
};
