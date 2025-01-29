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
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <MainButton onClick={onClick}>
      Submit
    </MainButton>
  );
};

export default Button;