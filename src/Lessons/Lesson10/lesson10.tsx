import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import Button from "../../Components/Button/Button";
import Spinner from "../../Components/Spinner/Spinner"; // Импортируем спиннер
import Input from "../../Components/Input/Input"; // Импортируем Input
import { ButtonWrapper, Lesson10Wrapper, ResultBlock, ErrorBlock } from "./styles";

function Lesson10() {
    const [joke, setJoke] = useState<string>('')
    const [error, setError] = useState<undefined | string>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [jokeValue, setJokeValue] = useState<string>(''); // Добавляем состояние для значения Input

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setJokeValue(event.target.value);
    }

    const fetchJokeData = async () => {
        const JOKE_URL: string = 'https://official-joke-api.appspot.com/random_joke'
        setLoading(true);
        setJoke('');
        setError(undefined);
        try {
            const response = await axios.get(JOKE_URL);
            const result = response.data;
            setJoke(`${result.setup} - ${result.punchline}`);
        } catch (error: any) {
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
            console.log('End');
        }
    }

    useEffect(() => {
        fetchJokeData(); // Отправляем запрос при загрузке страницы
    }, []);

    useEffect(() => {
        fetchJokeData(); // Отправляем запрос каждый раз при изменении значения в Input
    }, [jokeValue]);

    return (
        <Lesson10Wrapper>
          <ButtonWrapper>
            <Button name='GET JOKE' onClick={fetchJokeData} disabled={loading} />
          </ButtonWrapper>
          <Input
            name='joke'
            label='Joke' // Добавляем label
            value={jokeValue}
            onChange={onChange}
          />
          {joke && <ResultBlock>{joke}</ResultBlock>}
          {loading && <Spinner />}
          {error && <ErrorBlock>{error}</ErrorBlock>}
        </Lesson10Wrapper>
      )
}

export default Lesson10;