import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-height);
  padding: 0 6px;
  border-bottom: 1px solid #343a46;
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

export const StyledGithubSvg = styled.svg`
  height: 20px;
  width: 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
`;
