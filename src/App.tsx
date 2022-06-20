import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "./components/layout/Header";

const AppContainer = styled.div`
  font-size: 2rem;
  color: black;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  );
}

export default App;
