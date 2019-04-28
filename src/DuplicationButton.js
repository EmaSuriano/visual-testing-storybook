import React, { useState } from 'react';

const ButtonStyle = {
  padding: '10px',
  borderRadius: '5px',
  fontSize: '16px',
  border: 'pink 3px solid',
};

const DuplicationButton = ({ children }) => {
  const [count, setCount] = useState(1);

  return (
    <button style={ButtonStyle} onClick={() => setCount(count + 1)}>
      {new Array(count).fill(children)}
    </button>
  );
};

export default DuplicationButton;
