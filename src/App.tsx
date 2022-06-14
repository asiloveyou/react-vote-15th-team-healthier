import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #ccffcc;
  color: black;
`;

function App() {
  return (
    <AppContainer>
      <div>Heathier Login System</div>
    </AppContainer>
  );
}

export default App;
