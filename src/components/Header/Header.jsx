import React from "react";
import { StyledHeader, Navigation, NavigationLink } from "./Header.styled";
import logo from "../Pictures/logo.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/tweets">Tweets</NavigationLink>
      </Navigation>
      <a
        href="https://goit.global/ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} alt="GoIT logo" width={250} />
      </a>
    </StyledHeader>
  );
};
