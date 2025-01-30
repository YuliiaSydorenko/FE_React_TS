import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";
import {
  Lesson11Wrapper,
  ResultBlock,
  ErrorBlock,
  Button,
  DataContainer,
  CatImage,
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

  const deleteFact = (index: number) => {
    setCatFacts((prevFacts) => prevFacts.filter((_, i) => i !== index));
  };

  useEffect(() => {}, []);

  return (
    <Lesson11Wrapper>
      {isFirstLoad && !loading && <Button onClick={fetchCatFact}>GET INFO ABOUT CATS</Button>}
      {!loading && !isFirstLoad && catFacts.length > 0 && <Button onClick={fetchCatFact}>GET MORE INFO</Button>}
      {!loading && !isFirstLoad && catFacts.length === 0 && <ErrorBlock>Ошибка загрузки данных</ErrorBlock>}
      {catFacts.length > 0 && <Button onClick={deleteAllData}>DELETE ALL DATA</Button>}
      {loading && <Spinner />}
      {error && !loading && <Button onClick={fetchCatFact}>RETRY</Button>}
      {catFacts.length > 0 && (
        <DataContainer>
          {catFacts.map((fact, index) => (
            <div key={index} className="fact-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <ResultBlock style={{ marginBottom: '10px' }}>{`${index + 1}. ${fact}`}</ResultBlock>
                <Button onClick={() => deleteFact(index)} style={{ alignSelf: 'flex-start' }}>DELETE</Button>
              </div>
              <CatImage src={`https://cataas.com/cat?${index}`} alt="Cat" style={{ height: 'auto', maxHeight: '100px', borderRadius: '8px' }} />
            </div>
          ))}
        </DataContainer>
      )}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </Lesson11Wrapper>
  );
};

export default Lesson11;
