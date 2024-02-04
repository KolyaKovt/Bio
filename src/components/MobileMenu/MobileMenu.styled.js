import styled from "styled-components"

export const StyledBackdrop = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: 100%;
  height: calc(100% - var(--header-height));
  padding: 40px 60px;
  background-color: var(--primary-bg-color);

  @media screen and (min-width: 768px) {
    display: none;
  }
`
