import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { Container } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default SharedLayout;
