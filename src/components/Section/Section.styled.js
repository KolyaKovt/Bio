import styled from "styled-components";

export const StyledSection = styled.div`
  padding: 20px 0;

  &:first-child {
    padding-top: 40px;
  }

  &:last-child {
    padding-bottom: 40px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 50px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

export const StyledP = styled.p`
  font-size: 20px;
  line-height: 32.5px;
`;
