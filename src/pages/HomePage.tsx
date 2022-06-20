import React from "react";
import styled, { keyframes } from "styled-components";

const TextAnimation = keyframes`
  0% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
    transform: translateY(100%);
  }
  95% {
      transform: translateY(0%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
const Container = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text = styled.section<{ delay: number }>`
  color: ${({ theme }) => theme.gray};
  font-weight: 200;

  animation: ${TextAnimation} 1s ease-in-out both;
  animation-delay: ${({ delay }) => delay}s;

  margin-bottom: 1rem;
`;
const HighLight = styled.span`
  color: ${({ theme }) => theme.light_green};
`;

const HomePage = () => {
  return (
    <Container>
      <Text delay={0}>당신의</Text>
      <Text delay={0.7}>
        <HighLight>프짱</HighLight>/<HighLight>백짱</HighLight>에게
      </Text>
      <Text delay={1.4}>지금 바로</Text>
      <Text delay={2.1}>투표하세요!</Text>
    </Container>
  );
};

export default HomePage;
