import React, { useState, ChangeEvent } from 'react';
import Input from './Input';
import Button from './Button';
import { HomeworkWrapper, InputsContainer, ResultWrapper } from './styles';

const Homework09: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [submittedName, setSubmittedName] = useState<string>('');
  const [submittedAge, setSubmittedAge] = useState<string>('');

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const handleSubmit = () => {
    setSubmittedName(name);
    setSubmittedAge(age);
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
        <Button onClick={handleSubmit} />
        <ResultWrapper>
          <div>Name: {submittedName}</div>
          <div>Age: {submittedAge}</div>
        </ResultWrapper>
      </InputsContainer>
    </HomeworkWrapper>
  );
};

export default Homework09;
