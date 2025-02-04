import styled from 'styled-components';

export const BlogManagementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-style: solid;
  background-color: #007bff;
  color: white;
  border-color: #04070a;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;
