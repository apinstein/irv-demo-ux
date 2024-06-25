// src/components/Ballot.js
import React, { useState, useEffect } from 'react';
import CandidateList from './CandidateList';

const Ballot = ({ raceName, candidates, onVotesChange }) => {
  const [votes, setVotes] = useState(Array(candidates.length).fill(null));

  useEffect(() => {
    console.log("Ballot rendered with:", { raceName, candidates });
  }, [raceName, candidates]);

  const handleVote = (index, candidate) => {
    const newVotes = [...votes];
    newVotes[index] = candidate;
    for (let i = index + 1; i < newVotes.length; i++) {
      newVotes[i] = null;
    }
    setVotes(newVotes);
    onVotesChange(newVotes);
  };

  const getPriorSelections = (index) => {
    return votes
      .slice(0, index)
      .filter(vote => vote && vote !== "noVote")
      .join(", ");
  };

  return (
    <div className="Ballot">
      <h2>Ballot for {raceName}</h2>
      {candidates.map((_, index) => {
        const remainingCandidates = candidates.filter(candidate => 
          !votes.slice(0, index).includes(candidate)
        );
        const priorSelections = getPriorSelections(index);

        if (index === 0 || (votes[index - 1] && votes[index - 1] !== "noVote")) {
          return (
            <div key={index}>
              <h3>
                {index + 1}. {index === 0 
                  ? 'Which of these candidates do you cast your vote for?' 
                  : `If there is a runoff and your previous choice(s) ${priorSelections ? `(${priorSelections})` : ''} aren't in the runoff, which of these do you cast your vote for?`}
              </h3>
              <CandidateList 
                candidates={remainingCandidates}
                selectedCandidate={votes[index]}
                onSelect={(candidate) => handleVote(index, candidate)}
                includeNoVote={true}
                groupName={`vote-${index}`}
              />
            </div>
          );
        }
        return null;
      })}
      
      <h3>Your rankings:</h3>
      <ol>
        {votes.filter(vote => vote !== null).map((vote, index) => (
          <li key={index}>{vote === "noVote" ? "(No further vote)" : vote}</li>
        ))}
      </ol>
    </div>
  );
};

export default Ballot;