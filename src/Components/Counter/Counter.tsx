import React, { useState } from 'react';
import Button from '../Button/Button';
import { CounterWrapper, ButtonWrapper, ResultContainer } from './styles';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const onPlusClick = (): void => {
    setCounter((prevValue) => {
      return prevValue + 1;
    });
  };

  console.log('counter in Counter Component', counter);

  const onMinusClick = (): void => {
    setCounter((prevValue) => prevValue - 1);
  };

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" type="button" onClick={onMinusClick} />
      </ButtonWrapper>
      <ResultContainer>{counter}</ResultContainer>
      <ButtonWrapper>
        <Button name="+" type="button" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;
