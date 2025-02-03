import styled from '@emotion/styled';

export const HomeworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
`;

export const ResultWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
`;

export const ResultBlock = styled.div`
  margin-top: 20px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const ErrorBlock = styled.div`
  margin-top: 20px;
  color: red;
  font-size: 16px;
`;

export const SpinnerComponent = styled.div`
  border: 4px solid rgba(0,0,0,0.1);
  border-left-color: #1f27f5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;