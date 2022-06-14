import React from "react";
import styled from "styled-components";
import Login from "./pages/Login";

const AppContainer = styled.div`
  background-image: radial-gradient(
    circle farthest-corner at 10% 25%,
    rgba(239, 61, 78, 1) 0%,
    rgba(239, 61, 78, 0.81) 51.8%,
    rgba(239, 61, 78, 0.63) 84.6%
  );
  // background-color: blue;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: black;
`;

function App() {
  return (
    <AppContainer>
      <Login />
    </AppContainer>
  );
}

export default App;
