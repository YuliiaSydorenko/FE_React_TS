import styled from "@emotion/styled";

export const MainButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  min-height: 70px;
  outline: none;
  border: none;
  padding: 20px;
  background: ${({ disabled }) => (disabled ? '#868585' : '#1f27f5')};
  border-radius: 4px;
  color: white;
  flex-direction: column;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin: 20px; 
`;
