//Задача*
import React from 'react';
import Button from '../../Components/Button/Button';
import { ButtonContainer } from './styles';

const Homework08: React.FC = () => {
  return (
    <ButtonContainer>
      <Button name="Active Button" type="button" onClick={() => alert('Button Clicked!')} />
      <Button name="Disabled Button" type="button" onClick={() => alert('Button Clicked!')} disabled />
    </ButtonContainer>
  );
}

export default Homework08;
