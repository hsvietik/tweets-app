import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #8174d9;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;
export const NavigationLink = styled(NavLink)`
  width: 120px;
  padding: 10px 14px;
  border-radius: 10px;
  background-color: #ebd8ff;
  text-align: center;
  color: #373737;
  font-weight: 600;
  text-transform: uppercase;
  font-weight: 600;
  &.active {
    background-color: #5cd3a8;
  }
`;
