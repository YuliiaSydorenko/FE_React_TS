import styled from "@emotion/styled";

export const AnimalCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-width: 300px;
  min-height: 350px;
  background-color: rgb(145, 218, 211);
  border-radius: 6px;
  font-size: 24px;
`;

export const CardImage = styled.img`
  width: 100px;
`;

export const AnimalName = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const AnimalSpecies = styled.div`
  font-size: 20px;
  color: #666;
`;
