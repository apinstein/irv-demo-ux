// src/App.js
import React, { useState } from 'react';
import Ballot from './components/Ballot';
import Results from './components/Results';
import SuccessScreen from './components/SuccessScreen';

const App = () => {
  const raceName = "President";
  const candidates = ['Candidate A', 'Candidate B', 'Candidate C', 'Candidate D'];
  const [showResults, setShowResults] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [votes, setVotes] = useState([]);

  const handleVotesChange = (newVotes) => {
    setVotes(newVotes);
  };

  const handleSubmitVote = () => {
    const finalVotes = votes.filter(vote => vote !== null);
    setVotes(finalVotes);
    setShowSuccessScreen(true);
  };

  const handleRestartDemo = () => {
    setShowResults(false);
    setShowSuccessScreen(false);
    setVotes([]);
  };

  return (
    <div className="App">
      <h1>Ranked Choice Voting Demo</h1>
      {!showSuccessScreen && (
        <>
          <Ballot 
            raceName={raceName} 
            candidates={candidates} 
            onVotesChange={handleVotesChange} 
          />
          <button onClick={handleSubmitVote}>Cast Vote</button>
        </>
      )}
      {showSuccessScreen && !showResults && (
        <SuccessScreen onShowResults={() => setShowResults(true)} onRestart={handleRestartDemo} />
      )}
      {showResults && (
        <Results votes={votes} candidates={candidates} onRestart={handleRestartDemo} />
      )}
    </div>
  );
};

export default App;