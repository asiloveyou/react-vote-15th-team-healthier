import React, { useState } from "react";
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
  background-color: ${({ theme }) => theme.blue};
  color: white;
  &:hover {
    box-shadow: 0 0 0.5rem 0.04rem rgba(0, 0, 0, 0.2);
  }
`;

const SignUpButton = styled(Button)`
  background-color: ${({ theme }) => theme.light_blue};
  color: ${({ theme }) => theme.blue};
  &:hover {
    box-shadow: 0 0 0.5rem 0.04rem rgba(0, 0, 0, 0.2);
  }
`;

const SelectButton = styled(Button)`
  width: 5rem;
  padding: 0.8rem;
  margin: 0.1rem;
`;

const Input = styled.input`
  width: 80vw;
  max-width: 19rem;

  padding: 1rem;
  margin: 0.5rem;

  border-radius: 1rem;
  border: none;

  &:hover {
    box-shadow: 0 0 0.5rem 0.04rem rgba(0, 0, 0, 0.2);
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
const InputTitle = styled.div`
  padding: 1rem;
  color: rgb(100, 100, 100);
  font-size: 1rem;
  font-weight: 300;
`;
const Select = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function SignUp() {
  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <InputTitle>다음의 내용을 입력해주세요</InputTitle>
            <Input
              type="text"
              placeholder="이름"
              // onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="아이디"
              // onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="비밀번호"
              // onChange={(e) => setUserName(e.target.value)}
            ></Input>
            <InputTitle>다음 중 가짜시원을 고르시오</InputTitle>
            <Select>
              <SelectButton>유시원</SelectButton>
              <SelectButton>전시원</SelectButton>
              <SelectButton>이시원</SelectButton>
              <SelectButton>정시원</SelectButton>
            </Select>
          </InputSection>
          <ButtonSection>
            <SignUpButton
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              마음이 바뀌었어
            </SignUpButton>
            <LoginButton type="submit">가입하기</LoginButton>
          </ButtonSection>
        </Form>
      </ModalContainer>
    </>
  );
}

export default SignUp;
