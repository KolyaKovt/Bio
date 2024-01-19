import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 12px;
  border-radius: 9999px;

  &:hover,
  &:focus {
    background-color: var(--btn-focus-color);
  }
  
  &.active {
    color: var(--secondary-bg-color);
    background-color: var(--btn-focus-color);
  }
`;
