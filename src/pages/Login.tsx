import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalContainer = styled.div`
  max-width: 40rem;
  max-height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border-radius: 2rem;

  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0.4rem 0.5rem 0.04rem rgba(0, 0, 0, 0.02);
`;

const Button = styled.button`
  width: 40vw;
  max-width: 10rem;

  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0.4rem 0.5rem 0.04rem rgba(0, 0, 0, 0.02);
  border: none;
  border-radius: 1rem;

  padding: 1rem;
  margin: 0.5rem;

  cursor: pointer;
  outline: inherit;
`;

const LoginButton = styled(Button)`
  background-color: rgba(239, 61, 78, 0.8);
  color: white;
  &:hover {
    box-shadow: 0 0 1rem 0.04rem rgba(239, 61, 78, 0.3);
  }
`;

const SignUpButton = styled(Button)`
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    box-shadow: 0 0 1rem 0.04rem rgba(239, 61, 78, 0.3);
  }
`;

const Input = styled.input`
  width: 80vw;
  max-width: 19rem;

  padding: 1rem;
  margin: 0.5rem;

  box-shadow: 0 0.4rem 0.5rem 0.04rem rgba(0, 0, 0, 0.02);

  border-radius: 1rem;
  border: none;

  &:hover {
    box-shadow: 0 0 1rem 0.04rem rgba(239, 61, 78, 0.3);
  }
`;

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  padding: 1rem;
  color: white;
  // font-size: 4rem;
  font-weight: 200;
`;

function Login() {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Title>오늘도 반가워</Title>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <Input
              type="text"
              placeholder="아이디"
              onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </InputSection>
          <ButtonSection>
            <LoginButton type="submit">로그인</LoginButton>
            <SignUpButton
              type="button"
              onClick={() => {
                console.log("clicked");
                navigate("/signup");
              }}
            >
              회원가입
            </SignUpButton>
          </ButtonSection>
        </Form>
      </ModalContainer>
    </>
  );
}

export default Login;
