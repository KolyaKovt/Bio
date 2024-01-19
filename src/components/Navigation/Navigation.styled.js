import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
  font-size: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 8px 0;

  &.active {
    color: var(--secondary-bg-color);
  }
`;
