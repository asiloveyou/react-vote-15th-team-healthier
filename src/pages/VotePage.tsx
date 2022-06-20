import React, { useState, useEffect } from "react";
import { frontList, backList } from "../config/PartList";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";

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

  width: 10rem;

  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  margin-bottom: 1.7rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
`;
const VoteName = styled.div`
  color: ${({ theme }) => theme.gray};

  font-size: 1.5rem;
  font-weight: 200;
`;

const VotePage = () => {
  const [curPart, setCurPart] = useState(1);
  const [partList, setPartList] = useState<string[]>([]);

  useEffect(() => {
    setPartList(curPart === 1 ? frontList : backList);
  }, [curPart]);

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      <VoteList>
        {partList.map((item, idx) => (
          <VoteItem key={idx}>
            <VoteName>{item}</VoteName>
          </VoteItem>
        ))}
      </VoteList>
    </Container>
  );
};

export default VotePage;
