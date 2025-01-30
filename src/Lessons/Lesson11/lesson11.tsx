import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";
import {
  Lesson11Wrapper,
  ResultBlock,
  ErrorBlock,
  Button,
  DataContainer,
} from "./styles";

const Lesson11 = () => {
  const [catFacts, setCatFacts] = useState<string[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const fetchCatFact = async () => {
    const CAT_FACT_URL: string = "https://catfact.ninja/fact";
    setLoading(true);
    setError(undefined);

    try {
      const response = await axios.get(CAT_FACT_URL);
      const result = response.data;
      setCatFacts((prevFacts) => [...prevFacts, result.fact]);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
      setIsFirstLoad(false);
    }
  };

  const deleteAllData = () => {
    setCatFacts([]);
    window.location.reload();
  };

  useEffect(() => {}, []);

  return (
    <Lesson11Wrapper>
      {isFirstLoad && !loading && <Button onClick={fetchCatFact}>GET INFO ABOUT CATS</Button>}
      {!loading && !isFirstLoad && catFacts.length > 0 && <Button onClick={fetchCatFact}>GET MORE INFO</Button>}
      {!loading && !isFirstLoad && catFacts.length === 0 && <ErrorBlock>Ошибка загрузки данных</ErrorBlock>}
      {catFacts.length > 0 && <Button onClick={deleteAllData}>DELETE ALL DATA</Button>}
      {loading && <Spinner />}
      {catFacts.length > 0 && (
        <DataContainer>
          {catFacts.map((fact, index) => (
            <div key={index} className="fact-card" style={{ display: 'flex', alignItems: 'center' }}>
              <ResultBlock style={{ marginRight: '10px' }}>{`${index + 1}. ${fact}`}</ResultBlock>
              <img src={`https://cataas.com/cat?${index}`} alt="Cat" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
            </div>
          ))}
        </DataContainer>
      )}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </Lesson11Wrapper>
  );
};

export default Lesson11;
