import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 60px;
  width: 590px;
  min-height: 350px;
  max-height: fit-content;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 30px;
`;
