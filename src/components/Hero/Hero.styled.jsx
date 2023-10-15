import styled from "@emotion/styled";
import backgroundImage from "../Pictures/messages.png";

export const HeroSection = styled.section`
  padding: 50px;
  height: 100vh;
  background-image: url(${backgroundImage}),
    linear-gradient(115deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: 308px, auto;
  background-repeat: no-repeat;
  background-position: center, center;
  @media screen and (min-width: 768px) {
    background-size: 608px, auto;
  }
  @media screen and (min-width: 1440px) {
    background-size: 808px, auto;
  }
`;
export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 56px;
  color: #ebd8ff;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 64px;
  }
`;
export const Description = styled.p`
  margin-bottom: 20px;
  color: #ebd8ff;
  font-weight: 500;
  line-height: 1.8;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
`;
