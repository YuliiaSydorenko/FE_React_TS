import styled from '@emotion/styled';

export const Lesson11Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    background-color: #dfbe8e;
`;

export const DataContainer = styled.div`
    max-height: 700px;
    overflow-y: auto;
    width: 80%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    margin: 10px 0;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background: white;
    text-align: center;
`;

export const ResultBlock = styled.div`
    font-size: 18px;
    color: #333;
`;

export const ErrorBlock = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: red;
    font-weight: bold;
`;

export const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: #103552b0;
    color: white;

    &:hover {
        background: #7aaadd;
    }

    &:active {
        background: #2d558a;
    }
`;
