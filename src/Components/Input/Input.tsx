import React from 'react';
import './styles.css';
import { InputProps } from './types';

const Input: React.FC<InputProps> = ({ name, type = "text", placeholder, label }) => {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        className="input" 
      />
    </div>
  );
}

export default Input;
