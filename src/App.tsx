import React from "react";
import styled from "styled-components";
import Login from "./pages/Login";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AppContainer = styled.div`
  background: ${({ theme }) => theme.black};

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: black;
`;

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login/");
  }, []);

  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
}

export default App;
