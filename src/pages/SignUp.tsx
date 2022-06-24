import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  padding: 1rem;
  color: white;
  font-weight: 200;
  margin: 3rem;
`;
const ModalContainer = styled.div`
  max-width: 40rem;
  max-height: 30rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 10rem;

  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0.2rem;

  padding: 1rem;
  margin: 0.3rem;

  cursor: pointer;
  outline: inherit;
`;

const SignUpButton = styled(Button)`
  background-color: ${({ theme }) => theme.blue};
  color: white;
  font-size: 0.8rem;
  width: 11rem;

  &:hover {
    background-color: ${({ theme }) => theme.light_green};
    color: black;
    transition: 0.5s;
  }
`;

const BackButton = styled(Button)`
  background-color: ${({ theme }) => theme.light_blue};
  color: ${({ theme }) => theme.blue};
  font-size: 0.8rem;
  width: 11rem;

  &:hover {
    -webkit-filter: brightness(80%) grayscale(10%);
    filter: brightness(80%) grayscale(10%);
    transition: 0.5s;
  }
`;

const SelectButton = styled(Button)<{ isActive: boolean }>`
  width: 5.5rem;
  padding: 1rem;
  margin: 0.1rem;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.light_blue : "white"};
  color: ${({ isActive, theme }) => (isActive ? theme.blue : "black")};
`;

const Input = styled.input`
  width: 80vw;
  max-width: 20rem;

  padding: 1rem;
  margin: 0 0.5rem;

  border-radius: 0.2rem;
  border: none;
  font-size: 0.8rem;

  &:hover {
    box-shadow: 0 0 0.5rem 0.04rem rgba(0, 0, 0, 0.2);
  }
`;

const InputSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
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
  display: flex;
  justify-content: center;

  color: black;
  background-color: ${({ theme }) => theme.light_blue};

  font-size: 0.8rem;
  font-weight: 300;

  padding: 0.5rem 1rem;
  margin: 3rem 0.5rem 0rem 0.5rem;
  border-radius: 1rem;
`;
const Select = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
  justify-content: center;
  border: 2px;

  margin-top: 1rem;
`;
const Description = styled.p`
  font-size: 0.8rem;
  color: white;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
`;

function SignUp() {
  const [username, setUserName] = useState<string>();
  const [id, setId] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [siwon, setSiwon] = useState<number>();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (siwon == 2) {
      alert("올바른 시원을 고르세요");
      return;
    }
  };

  const onChangeName = (value: string) => {
    setUserName(value);
  };

  const onChangeId = (value: string) => {
    setId(value);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <InputSection>
            <InputTitle>다음의 내용을 입력해주세요</InputTitle>
            <Description>이름</Description>
            <Input
              type="text"
              placeholder="이름"
              onChange={(e) => onChangeName(e.target.value)}
            ></Input>
            <Description>아이디</Description>
            <Input
              type="text"
              placeholder="아이디"
              onChange={(e) => onChangeId(e.target.value)}
            ></Input>
            <Description>비밀번호</Description>
            <Input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => onChangePassword(e.target.value)}
            ></Input>
            <InputTitle>다음 중 가짜시원을 고르시오</InputTitle>
            <Select>
              <SelectButton
                type="button"
                onClick={() => {
                  setSiwon(0);
                }}
                isActive={siwon == 0}
              >
                유시원
              </SelectButton>
              <SelectButton
                type="button"
                onClick={() => {
                  setSiwon(1);
                }}
                isActive={siwon == 1}
              >
                전시원
              </SelectButton>
              <SelectButton
                type="button"
                onClick={() => {
                  setSiwon(2);
                }}
                isActive={siwon == 2}
              >
                이시원
              </SelectButton>
              <SelectButton
                type="button"
                onClick={() => {
                  setSiwon(3);
                }}
                isActive={siwon == 3}
              >
                정시원
              </SelectButton>
            </Select>
          </InputSection>
          <ButtonSection>
            <BackButton
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              마음이 바뀌었어
            </BackButton>
            <SignUpButton type="submit">가입하기</SignUpButton>
          </ButtonSection>
        </Form>
      </ModalContainer>
    </Container>
  );
}

export default SignUp;
