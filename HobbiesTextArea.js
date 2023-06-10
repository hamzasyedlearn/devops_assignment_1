import React from 'react';

const HobbiesTextarea = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="hobbies">Hobbies:</label>
      <textarea id="hobbies" name="hobbies" rows="4" cols="50" onChange={onChange}></textarea>
    </div>
  );
};

export default HobbiesTextarea;
