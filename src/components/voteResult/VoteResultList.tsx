import React from "react";
import { IVoteList } from "../../config/interface";
import styled from "styled-components";

const VoteItem = styled.section`
  display: flex;
  justify-content: space-between;

  width: 20rem;
  font-weight: 200;
  font-size: 1.5rem;

  padding-bottom: 0.5rem;
  margin-bottom: 1.7rem;

  border-bottom: 0.01rem solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.gray};
`;
const VoteName = styled.section`
  padding-left: 0.5rem;
`;
const VoteNumber = styled.section`
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.red};
`;

const VoteResultList = ({ partList }: IVoteList) => {
  return (
    <>
      {partList.map((part) => (
        <VoteItem key={part.id}>
          <VoteName>{part.name}</VoteName>
          <VoteNumber>123표</VoteNumber>
        </VoteItem>
      ))}
    </>
  );
};

export default VoteResultList;
