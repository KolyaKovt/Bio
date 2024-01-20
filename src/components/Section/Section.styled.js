import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledSection = styled.section`
  padding: 20px 0;

  &:first-child {
    padding-top: 40px;
  }

  &:last-child {
    padding-bottom: 40px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 375px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

export const StyledH1 = styled.h1`
  color: var(--title-color);
  font-size: 36px;
  margin-bottom: 16px;
`;

export const StyledH2 = styled.h2`
  color: var(--title-color);
  font-size: 28px;
  margin-bottom: 16px;
`;

export const StyledP = styled.p`
  font-size: 20px;
  line-height: 32.5px;
  margin-bottom: 16px;
`;

const borderRadius = css`
  border-radius: 10px;
`;

export const StyledImg = styled.img`
  ${borderRadius}
`;

const linkStyles = css`
  margin-bottom: 30px;
  color: #4162fd;
  text-decoration: underline;
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const StyledA = styled.a`
  ${linkStyles}
`;

export const StyledVideo = styled.iframe`
  ${borderRadius}
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: disc;
  padding-left: 40px;
`;
