import React from 'react';

const NameInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" onChange={onChange} required />
    </div>
  );
};

export default NameInput;
