import "./styles.css";
import React from 'react';
import { AnimalCardProps } from './types';

const AnimalCard: React.FC<AnimalCardProps> = 
({ animalName, animalSpecies, animalImg, children }) => {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} className="card-image" alt={animalName} />
      {/* prop children позволяет добавлять дополнительную структуру(JSX, компоненты) в компонент */}
      {children}
    </div>
  );
}

export default AnimalCard;
