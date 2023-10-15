import styled from "@emotion/styled";

export const StyledList = styled.ul`
  margin: 0px auto;
  max-width: 420px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 820px) {
    max-width: 820px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1220px;
  }
`;
