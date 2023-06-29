import React, { useState } from 'react';

const Greeting = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGreeting = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name" />
      <button onClick={handleGreeting}>Greet</button>
      {
      greeting && 
      <p>{greeting}</p>
      }
    </div>
  );
};

export default Greeting;
