import React, { useState } from "react";
import "./App.css";
import TextField from "@material-ui/core/TextField";
const generateRandomusNamus = (
  vowels,
  consonants,
  length,
  consonantsComboLimit
) => {
  let alphabet = [...vowels, ...consonants];
  let nickus = [length];
  let consonantsCounter = 0;
  let randomAlphabetIndex = Math.floor(Math.random() * alphabet.length);
  for (let i = 0; i < length; i++) {
    if (consonantsCounter == consonantsComboLimit) {
      randomAlphabetIndex = Math.floor(Math.random() * vowels.length);
      consonantsCounter = 0;
    } else {
      randomAlphabetIndex = Math.floor(Math.random() * alphabet.length);
    }
    randomAlphabetIndex > 5 && consonantsCounter++;
    nickus[i] = alphabet[randomAlphabetIndex];
  }
  return nickus;
};

const App = () => {
  const [vowels] = "aeiouy".split();
  const [consonants] = "BCDFGHJKLMNPQRSTVXZW".toLowerCase().split();
  const [nickLength, setNickLength] = useState(5);
  const [consonantsSpreeLimit, setConsonantsSpreeLimit] = useState(1);

  const nickusRandomus = generateRandomusNamus(
    vowels,
    consonants,
    nickLength,
    consonantsSpreeLimit
  );
  
  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="consonants-spree-limit-field"
          label="Consonants spree limit"
          onChange={e => setConsonantsSpreeLimit(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-name"
          label="Nick length"
          onChange={e => setNickLength(e.target.value)}
          margin="normal"
        />

        {nickusRandomus}
      </header>
    </div>
  );
};

export default App;
