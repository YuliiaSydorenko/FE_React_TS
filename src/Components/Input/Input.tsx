import React from 'react';
import { InputWrapper, Label, InputElement } from './styles';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder, label, id, value, onChange }) => {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputElement 
        id={id}
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
}

export default Input;
