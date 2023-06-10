import React from 'react';

const SexDropdown = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="sex">Sex:</label>
      <select id="sex" name="sex" onChange={onChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default SexDropdown;
