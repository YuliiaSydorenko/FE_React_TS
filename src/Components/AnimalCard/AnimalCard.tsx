import React from 'react';
import { AnimalCardWrapper, 
  CardImage, 
  AnimalName, 
  AnimalSpecies } 
  from './styles';
import { AnimalCardProps } from './types';

const AnimalCard: React.FC<AnimalCardProps> = ({ animalName, animalSpecies, animalImg, children }) => {
  return (
    <AnimalCardWrapper>
      <AnimalName>{animalName}</AnimalName>
      <AnimalSpecies>{animalSpecies}</AnimalSpecies>
      <CardImage src={animalImg} alt={animalName} />
      {/* prop children позволяет добавлять дополнительную структуру (JSX, компоненты) в компонент */}
      {children}
    </AnimalCardWrapper>
  );
}

export default AnimalCard;
