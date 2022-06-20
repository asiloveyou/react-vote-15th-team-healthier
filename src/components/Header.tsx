import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: space-between;

  top: 0;
  width: 100%;
  height: 5rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
`;
const LeftContent = styled.section`
  display: flex;
  font-size: 1.3rem;

  color: ${({ theme }) => theme.gray};
`;
const Logo = styled.img`
  margin: 0 1.7rem;

  width: 2.2rem;
  height: 2.2rem;

  cursor: pointer;
`;
const VoteTab = styled.section`
  cursor: pointer;
  font-weight: 200;

  margin-top: 0.3rem;

  & + & {
    margin-left: 2rem;
  }
`;
const RightContent = styled.section`
  font-size: 1rem;
  margin-right: 1rem;

  color: ${({ theme }) => theme.light_green};

  cursor: pointer;
  outline: inherit;
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <LeftContent>
        <Logo src="/healthier_logo.png" />
        <VoteTab onClick={() => navigate("/vote")}>투표하기</VoteTab>
        <VoteTab onClick={() => navigate("/voteResult")}>결과보기</VoteTab>
      </LeftContent>
      <RightContent
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </RightContent>
    </Container>
  );
};

export default Header;
