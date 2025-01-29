import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

export const ButtonWrapper = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  gap: 10px;
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
  div {
    margin-bottom: 10px;
  }
`;