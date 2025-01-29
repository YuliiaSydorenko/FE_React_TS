import React, { useState, ChangeEvent, useEffect } from 'react';
import Input from "../../Components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";
import axios from 'axios';

function Lesson09() {
  // Неконтролируемый компонент - значение которого мы не контролируем, 
  // то есть не создаём никакого локального хранилища, 
  // в котором будет храниться значение

  // Контролируемый компонент - состояние которого, 
  // хранится внутри компонента React и мы можем 
  // контролировать его изменение
  // 1 шаг контроля - создание стейта, в котором мы будем хранить значение инпута
  const [userNameValue, setUserNameValue] = useState<string>('');
  const [ageValue, setAgeValue] = useState<string>('');
  const [jokeValue, setJokeValue] = useState<string>('');

  // 2 шаг контроля - создание функции, которая будет забирать значение
  // введенное пользователем из объекта event и сохранять его в state
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(event.target.value);
  };

  const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value);
  };

  // Функция для отправки запроса
  const fetchJokeData = async () => {
    const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke';
    try {
      const response = await axios.get(JOKE_URL);
      const result = response.data;
      console.log(`${result.setup} - ${result.punchline}`);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  // useEffect при монтировании компонента (первый рендер)
  // Чтобы функция (1-й аргумент) выполнилась только 1 раз при первом рендере
  // передаётся пустой массив зависимостей (2-й аргумент)
  useEffect(() => {
    console.log('Mounting');
  }, []);

  // useEffect при обновлении компонента (повторный рендер)
  // Чтобы функция (1-й аргумент) выполнилась при изменении значения в первом инпуте
  // передаётся массив зависимостей с тем стейтом (значением), при изменении которого нужно выполнять функцию (2-й аргумент)
  useEffect(() => {
    console.log('Update');
  }, [userNameValue]);

  // useEffect при размонтировании компонента (до момента удаления)
  // Чтобы функция (1-й аргумент) выполнилась один раз, но непосредственно перед удалением компонента
  // в первом аргументе (функции) необходимо вернуть другую функцию, которая и будет выполнять перед размонтированием
  // 2-й аргумент - пустой массив зависимостей
  useEffect(() => {
    return () => {
      console.log('Unmounting');
    };
  }, []);

  // useEffect при изменении значения в Input
  useEffect(() => {
    fetchJokeData(); // Отправляем запрос каждый раз при изменении значения в Input
  }, [jokeValue]);

  return (
    <Lesson09Wrapper>
      <InputsContainer>
        <input type="text" value={jokeValue} onChange={(e) => setJokeValue(e.target.value)} />
        <Input
          name='user_name'
          label="User name"
          //placeholder="Enter your name"
          value={userNameValue}
          onChange={onChangeName}
        />
        <Input
          name='user_age'
          label="Age"
          //placeholder="Enter your age"
          value={ageValue}
          onChange={onChangeAge}
        />
        <Result>{userNameValue}</Result>
        <div>Your age: {ageValue}</div>
      </InputsContainer>
    </Lesson09Wrapper>
  );
}

export default Lesson09;
