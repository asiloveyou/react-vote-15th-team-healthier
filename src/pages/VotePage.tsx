import React, { useState, useEffect } from "react";
import { frontList, backList } from "../config/PartList";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../config/interface";
import VoteCandidateList from "../components/votePage/VoteCandidateList";

const Container = styled.article`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteList = styled.section`
  margin-top: 5rem;

  display: grid;
  grid-gap: 7rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
const VoteComment = styled.p`
  font-size: 1rem;
  font-weight: 200;
  color: ${({ theme }) => theme.gray};

  margin-top: 0.5rem;
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
      <VoteComment>
        당신의 {curPart === 1 ? "프" : "백"}짱에게 투표하세요!
      </VoteComment>
      <VoteList>
        {partList.length !== 0 && <VoteCandidateList partList={partList} />}
      </VoteList>
    </Container>
  );
};

export default VotePage;
