// src/components/SuccessScreen.js
import React from 'react';

const SuccessScreen = ({ onShowResults, onRestart }) => {
  return (
    <div>
      <h2>Your vote has been recorded</h2>
      <button onClick={onShowResults}>Show Results</button>
      <button onClick={onRestart}>Restart Demo</button>
    </div>
  );
};

export default SuccessScreen;