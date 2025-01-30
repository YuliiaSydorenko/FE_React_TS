import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 22px;
  color: #04640ca9;
`;

export const InputElement = styled.input`
  width: 100%;
  padding: 12px;
  outline: none;
  border: 1px solid rgb(22, 20, 20);
  border-radius: 4px;
  font-size: 16px;

  &::placeholder {
    color: #180303;
  }
`;
