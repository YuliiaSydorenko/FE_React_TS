import styled from '@emotion/styled';
import { css } from '@emotion/react';
//import Example1 from '../../assets/avatar.jpg';
//import Example2 from '../../assets/logo.jpg';

interface BoxInfoStyledProps {
  primary?: boolean;
}

// шаблоны стилей для переиспользования
const boxBasicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BoxInfo = styled.div<BoxInfoStyledProps>`
  // подстановка переменной, которая содержит шаблон стилей
  ${boxBasicStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 300px;
  background-color: ${(props) => (props.primary ? 'rebeccapurple' : 'purple')};
  border: ${({ primary }) => primary ? '2px solid purple' : '6px solid grey'};
  // пример работы с псевдоклассом
  &:hover {
    background-color: #EC4DFA;
  }
  /* color: ${({ primary }) => primary ? 'white' : 'black'}; */
  // font-size: 20px;
  // font-weight: bold;
`;

export const ContentContainer = styled.div`
  // подстановка переменной, которая содержит шаблон стилей
  ${boxBasicStyles}
  gap: 20px;
  flex-direction: column;
  border-color: grey;
`;

export const Image = styled.img`
  width: 30px;
`;

export const Text = styled.p`
  font-size: 24px;
  color: red;
  padding: 20px;
`;
