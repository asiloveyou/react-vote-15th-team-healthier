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
  margin: 5rem;

  display: grid;
  grid-gap: 7rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const VoteItem = styled.div`
  display: flex;
  justify-content: center;

  width: 8rem;
  padding-bottom: 0.5rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};

  font-size: 1.5rem;
  font-weight: 200;

  cursor: pointer;
`;

const VotePage = () => {
  const [curPart, setCurPart] = useState(1);
  const [partList, setPartList] = useState<IPartList[]>([]);

  useEffect(() => {
    setPartList(curPart === 1 ? frontList : backList);
  }, [curPart]);

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      {partList.length !== 0 && (
        <VoteList>
          {partList.map((part) => (
            <VoteItem key={part.id}>{part.name}</VoteItem>
          ))}
        </VoteList>
      )}
    </Container>
  );
};

export default VotePage;
