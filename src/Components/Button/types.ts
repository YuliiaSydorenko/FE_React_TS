// Определение интерфейса для пропсов компонента Button
export interface ButtonProps {
    name?: string;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
    disabled?: boolean;
  }
  