import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import VotePage from "./pages/VotePage";
import VoteResult from "./pages/VoteResult";
import GlobalStyle from "./Global.css";
import theme from "./config/theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="vote" element={<VotePage />} />
            <Route path="voteResult" element={<VoteResult />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p style={{ color: "white" }}>잘못된 경로입니다</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
