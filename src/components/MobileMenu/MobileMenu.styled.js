import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 20px;
`;
export const StyledLink = styled.a`
display: block;
  padding: 8px 0;
`;

export const StyledButton = styled.button`
  display: flex;
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
    background-color: #2d323b;
  }
`;

export const StyledSvg = styled.svg`
  width: 100%;
  height: 100%;
`;

export const StyledBackdrop = styled.div`
  border-top: 1px solid #343a46;
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  padding: 40px 60px;
  background-color: var(--primary-bg-color);
`;
