import React, { ChangeEvent } from 'react';
import { InputWrapper, Label, InputElement } from './styles';

interface InputProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ name, label, value, onChange }) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputElement
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </InputWrapper>
  );
};

export default Input;
