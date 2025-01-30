import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import Spinner from '../../Components/Spinner/Spinner';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { HomeworkWrapper, InputsContainer, ResultWrapper, ResultBlock, ErrorBlock, SpinnerComponent } from './styles';

function Homework10() {
    const [inputValue1, setInputValue1] = useState<string>('');
    const [inputValue2, setInputValue2] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [error, setError] = useState<undefined | string>(undefined);
    const [loading, setLoading] = useState<boolean>(false);

    const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
    }

    const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    }

    const fetchDogImage = async () => {
        const DOG_URL: string = 'https://dog.ceo/api/breeds/image/random';
        setLoading(true);
        setImageUrl('');
        setError(undefined);
        try {
            const response = await axios.get(DOG_URL);
            const result = response.data;
            setImageUrl(result.message);
        } catch (error: any) {
            console.log(error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (inputValue1) {
            fetchDogImage();
        }
    }, [inputValue1]);

    
    return (
        <HomeworkWrapper>
            <InputsContainer>
                <Input
                    name='input1'
                    label='Input 1'
                    value={inputValue1}
                    onChange={onChangeInput1}
                />
                <Input
                    name='input2'
                    label='Input 2'
                    value={inputValue2}
                    onChange={onChangeInput2}
                />
                {loading && <SpinnerComponent />}
                {imageUrl && <ResultBlock><img src={imageUrl} alt="Random Dog" /></ResultBlock>}
                {error && <ErrorBlock>{error}</ErrorBlock>}
            </InputsContainer>
        </HomeworkWrapper>
    )
}

export default Homework10;