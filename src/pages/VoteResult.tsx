import React, { useState, useEffect } from "react";
import { frontList, backList } from "../config/PartList";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../config/interface";
import VoteResultList from "../components/voteResult/VoteResultList";

const Container = styled.article`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const VoteList = styled.section`
  margin-top: 2rem;
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
        {partList.length !== 0 && <VoteResultList partList={partList} />}
      </VoteList>
    </Container>
  );
};

export default VoteResult;
