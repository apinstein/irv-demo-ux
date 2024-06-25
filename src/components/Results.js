// src/components/Results.js
import React from 'react';

const Results = ({ votes, candidates, onRestart }) => {
  return (
    <div>
      <h2>Results</h2>
      <p>Vote counting logic to be implemented.</p>
      <button onClick={onRestart}>Restart Demo</button>
    </div>
  );
};

export default Results;