import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
  font-size: 20px;
`;
export const StyledLink = styled(Link)`
display: block;
  padding: 8px 0;
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
