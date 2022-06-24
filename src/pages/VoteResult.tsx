import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../lib/interface";
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
  const [curPart, setCurPart] = useState("f");
  const [partList, setPartList] = useState<IPartList[]>([]);

  useEffect(() => {
    let resultList = [] as IPartList[];

    fetch(`/api/vote/${curPart}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        resultList = [...response];
      });

    resultList.sort((a, b) => b.vote_num - a.vote_num);
    setPartList(resultList);
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
