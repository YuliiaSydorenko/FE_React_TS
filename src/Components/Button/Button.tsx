import "./styles.css";
import React from 'react';
import { ButtonProps } from "./types";

// Определение интерфейса для пропсов компонента Button
// interface ButtonProps {
//   name?: string;
//   type: 'submit' | 'button' | 'reset';
//   onClick: () => void;
// }

const Button: React.FC<ButtonProps> = ({ name = "SEND", type, onClick }) => {
  return (
    <button className="main-button" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
