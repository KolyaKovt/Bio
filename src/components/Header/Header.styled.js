import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  height: var(--header-height);
  padding: 0 6px;
  background-color: var(--primary-bg-color);
  color: rgb(235, 236, 240);
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
