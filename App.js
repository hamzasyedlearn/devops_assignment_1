import React, { useState } from 'react';
import NameInput from './NameInput';
import AgeInput from './AgeInput';
import SexDropdown from './SexDropdown';
import HobbiesTextarea from './HobbiesTextarea';
import ImageInput from './ImageInput';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleHobbiesChange = (e) => {
    setHobbies(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the collected data
    // and perform any necessary processing or API calls
    // using the values stored in the state variables.
    console.log({
      name,
      age,
      sex,
      hobbies,
      image
    });
  };

  return (
    <div>
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit}>
        <NameInput onChange={handleNameChange} />
        <AgeInput onChange={handleAgeChange} />
        <SexDropdown onChange={handleSexChange} />
        <HobbiesTextarea onChange={handleHobbiesChange} />
        <ImageInput onChange={handleImageChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default App;
