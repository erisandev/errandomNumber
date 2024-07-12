import React, { useState } from 'react';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 100
    setRandomNumber(randomNumber);
  };

  return (
    <div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}

export default RandomNumber;
