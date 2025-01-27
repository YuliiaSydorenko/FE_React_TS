import React from 'react';
import './styles.css';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder, label, id }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input 
        id={id}
        name={name} 
        type={type} 
        placeholder={placeholder} 
        className="input" 
      />
    </div>
  );
}

export default Input;
