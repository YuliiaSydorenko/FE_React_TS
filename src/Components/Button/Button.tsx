//import "./styles.css";
import React from 'react';
//import { ButtonProps } from "./types";
import { MainButton } from "./styles";

// Определение интерфейса для пропсов компонента Button
// interface ButtonProps {
//   name?: string;
//   type: 'submit' | 'button' | 'reset';
//   onClick: () => void;
//   disabled?: boolean; // Добавляем свойство disabled
// }

interface ButtonProps {
  name: string;
  onClick: () => void;
  disabled?: boolean; // Добавляем свойство disabled
}

const Button: React.FC<ButtonProps> = ({ name, onClick, disabled }) => {
  return (
    <MainButton onClick={onClick} disabled={disabled}>
      {name}
    </MainButton>
  );
};

export default Button;