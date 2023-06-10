import React from 'react';

const ImageInput = ({ onChange }) => {
  return (
    <div>
      <label htmlFor="image">Profile Picture:</label>
      <input type="file" id="image" name="image" onChange={onChange} />
    </div>
  );
};

export default ImageInput;
