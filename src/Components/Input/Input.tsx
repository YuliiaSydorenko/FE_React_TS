import React from 'react';
import { InputWrapper, Label, InputElement } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder, label, id }) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputElement 
        id={id}
        name={name} 
        type={type} 
        placeholder={placeholder} 
      />
    </InputWrapper>
  );
}

export default Input;
