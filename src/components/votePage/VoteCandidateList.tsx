import React, { useState, useEffect } from "react";
import { IVoteList } from "../../config/interface";
import styled from "styled-components";
import Heart from "../Heart";
import { useNavigate } from "react-router-dom";

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

const VoteCandidateList = ({ partList }: IVoteList) => {
  const [voteNumber, setVoteNumber] = useState(-1);
  const navigate = useNavigate();

  useEffect(() => {
    const handleVote = setTimeout(() => setVoteNumber(-1), 1000);

    return () => clearTimeout(handleVote);
  }, [voteNumber]);

  const handleVoting = (id: number): void => {
    fetch("/api/vote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        candidate_id: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.message === "success") {
          setVoteNumber(id);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.message === "login_first") {
          alert("로그인 먼저 진행해주세요");
          navigate("/login");
        }
      });
  };

  return (
    <>
      {partList.map((part) => (
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
    </>
  );
};

export default VoteCandidateList;
