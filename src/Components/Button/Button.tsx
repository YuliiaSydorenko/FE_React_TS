//import "./styles.css";
import React from 'react';
import { ButtonProps } from "./types";
import { MainButton } from "./styles";

// Определение интерфейса для пропсов компонента Button
// interface ButtonProps {
//   name?: string;
//   type: 'submit' | 'button' | 'reset';
//   onClick: () => void;
//   disabled?: boolean; // Добавляем свойство disabled
// }

const Button: React.FC<ButtonProps> = ({ name = "SEND", type=`button`, onClick, disabled }) => {
  return (
    <MainButton type={type} onClick={onClick} disabled={disabled}>
      {name}
    </MainButton>
  );
}

export default Button;
