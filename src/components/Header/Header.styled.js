import styled, { css } from "styled-components"

export const StyledHeader = styled.header`
  z-index: 1000;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  height: var(--header-height);
  padding: 0 6px;
  border-bottom: ${({ $isBorder }) =>
    $isBorder ? `1px solid var(--border-color)` : "none"};
  box-shadow: ${({ $isBorder }) =>
    $isBorder ? "0 16px 32px -16px rgba(0, 0, 0, 0.1);" : "none"};
  background-color: var(--primary-bg-color);
  opacity: 99%;
  transition: var(--theme-transition-properties);

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`

const btnCss = css`
  display: inline-block;
  margin: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 14px;
  fill: var(--text-color);
  transition: var(--theme-transition-properties);

  &:hover,
  &:focus {
    background-color: var(--btn-focus-color);
  }
`

export const StyledButton = styled.button`
  ${btnCss}
  stroke: var(--text-color);

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`

export const StyledLink = styled.a`
  ${btnCss}
`

export const StyledThemeBtn = styled.button`
  ${btnCss}
`
