import React from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/layout/Header";

const AppContainer = styled.div`
  font-size: 2rem;
  color: black;
`;

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <AppContainer>
      <Header />
      <Outlet />
    </AppContainer>
  );
}

export default App;
