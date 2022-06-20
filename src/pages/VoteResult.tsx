import React, { useState, useEffect } from "react";
import { frontList, backList } from "../config/PartList";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../config/interface";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteList = styled.div`
  margin-top: 2rem;
`;
const VoteItem = styled.section`
  display: flex;
  justify-content: space-between;

  width: 20rem;

  padding-bottom: 0.5rem;
  margin-bottom: 1.7rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};
`;
const VoteName = styled.div`
  font-size: 1.5rem;
  font-weight: 200;

  padding-left: 0.5rem;
`;
const VoteNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 200;

  padding-right: 0.5rem;

  color: ${({ theme }) => theme.red};
`;

const VoteResult = () => {
  const [curPart, setCurPart] = useState(1);
  const [partList, setPartList] = useState<IPartList[]>([]);

  useEffect(() => {
    setPartList(curPart === 1 ? frontList : backList);
  }, [curPart]);

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      <VoteList>
        {partList.length !== 0 &&
          partList.map((part) => (
            <VoteItem key={part.id}>
              <VoteName>{part.name}</VoteName>
              <VoteNumber>123표</VoteNumber>
            </VoteItem>
          ))}
      </VoteList>
    </Container>
  );
};

export default VoteResult;
