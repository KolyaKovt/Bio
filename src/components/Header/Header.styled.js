import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  height: var(--header-height);
  padding: 0 6px;
  /* border-bottom: 1px solid #343a46; */
  background-color: var(--primary-bg-color);
  opacity: 99%;
  
  @media screen and (max-width: 767px) {
    border-bottom: 1px solid #343a46;
  }

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const btnCss = css`
  margin: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 14px;
  stroke: rgb(235, 236, 240);
  fill: #149eca;

  &:hover,
  &:focus {
    background-color: var(--btn-focus-color);
  }
`;

export const StyledButton = styled.button`
  ${btnCss}

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled.a`
  ${btnCss}
`;
