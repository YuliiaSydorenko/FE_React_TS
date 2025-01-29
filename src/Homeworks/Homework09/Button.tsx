import React from 'react';
import { ButtonWrapper } from './styles';

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      Submit
    </ButtonWrapper>
  );
};

export default Button;