import React, { useState, useEffect } from "react";
import { frontList, backList } from "../config/PartList";
import styled from "styled-components";
import ToggleButtons from "../components/ToggleButtons";
import { IPartList } from "../config/interface";
import Heart from "../components/Heart";

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
const VoteName = styled.button`
  font-size: 1.5rem;
  font-weight: 200;

  border: none;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.gray};

  cursor: pointer;

  :disabled {
    cursor: default;
  }
`;
const VoteItem = styled.section<{ voteNumber: number; part: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  width: 8rem;
  padding-bottom: 0.5rem;

  border-bottom: 0.01rem solid
    ${({ voteNumber, part, theme }) =>
      part === voteNumber ? theme.red : theme.gray};
  ${VoteName} {
    color: ${({ voteNumber, part, theme }) =>
      part === voteNumber ? theme.red : theme.gray};
  }

  &:hover {
    border-bottom: 0.01rem solid ${({ theme }) => theme.red};
    transition: 0.5s;
    ${VoteName} {
      color: ${({ theme }) => theme.red};
      transition: 0.5s;
    }
  }
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
  const [voteNumber, setVoteNumber] = useState(-1);

  useEffect(() => {
    setPartList(curPart === 1 ? frontList : backList);
  }, [curPart]);

  useEffect(() => {
    const handleVote = setTimeout(() => setVoteNumber(-1), 1000);

    return () => clearTimeout(handleVote);
  }, [voteNumber]);

  const handleVoting = (id: number) => {
    setVoteNumber(id);
  };

  return (
    <Container>
      <ToggleButtons curPart={curPart} setCurPart={setCurPart} />
      <VoteComment>
        당신의 {curPart === 1 ? "프" : "백"}짱에게 투표하세요!
      </VoteComment>
      <VoteList>
        {partList.length !== 0 &&
          partList.map((part) => (
            <VoteItem key={part.id} voteNumber={voteNumber} part={part.id}>
              <VoteName
                disabled={voteNumber !== -1}
                onClick={() => handleVoting(part.id)}
              >
                {part.name}
              </VoteName>
              {voteNumber === part.id && <Heart />}
            </VoteItem>
          ))}
      </VoteList>
    </Container>
  );
};

export default VotePage;
