import React from 'react';

const AgeInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="age">Age:</label>
      <input type="date" id="age" name="age" onChange={onChange} required />
    </div>
  );
};

export default AgeInput;
