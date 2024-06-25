// src/components/CandidateList.js
import React from 'react';

const CandidateList = ({ candidates, selectedCandidate, onSelect, includeNoVote, groupName }) => {
  return (
    <div>
      {candidates.map(candidate => (
        <div key={candidate}>
          <input 
            type="radio" 
            id={`${groupName}-${candidate}`}
            name={groupName}
            value={candidate}
            checked={selectedCandidate === candidate}
            onChange={() => onSelect(candidate)}
          />
          <label htmlFor={`${groupName}-${candidate}`}>{candidate}</label>
        </div>
      ))}
      {includeNoVote && (
        <div>
          <input 
            type="radio" 
            id={`${groupName}-noVote`}
            name={groupName}
            value="noVote"
            checked={selectedCandidate === "noVote"}
            onChange={() => onSelect("noVote")}
          />
          <label htmlFor={`${groupName}-noVote`}>(I choose not to cast a ballot for this race)</label>
        </div>
      )}
    </div>
  );
};

export default CandidateList;