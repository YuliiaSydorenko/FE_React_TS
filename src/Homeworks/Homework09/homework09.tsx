import React, { useState, ChangeEvent } from 'react';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { HomeworkWrapper, InputsContainer, ResultWrapper } from './styles';

const Homework09: React.FC = () => {
  // State variables for name and age input fields
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [submittedName, setSubmittedName] = useState<string>('');
  const [submittedAge, setSubmittedAge] = useState<string>('');

  // Handler for name input change
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Handler for age input change
  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = () => {
    if (name && age) {
      setSubmittedName(name);
      setSubmittedAge(age);
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <HomeworkWrapper>
      <InputsContainer>
        <Input
          name="name"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <Input
          name="age"
          label="Age"
          value={age}
          onChange={handleAgeChange}
        />
        <Button name="Submit" onClick={handleSubmit} />
        <ResultWrapper>
          {submittedName && <div>Name: {submittedName}</div>}
          {submittedAge && <div>Age: {submittedAge}</div>}
        </ResultWrapper>
      </InputsContainer>
    </HomeworkWrapper>
  );
};

export default Homework09;