//import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from "Components/Spinner/Spinner";
import {
  Lesson11Wrapper,
  ResultBlock,
  ErrorBlock,
  Button,
  DataContainer,
  Card,
  CatImage,
} from "./styles";

const Lesson11 = () => {
  const [catFactsGroups, setCatFactsGroups] = useState<{ id: number; facts: { id: number; text: string }[] }[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const fetchCatFacts = async () => {
    const CAT_FACT_URL: string = "https://catfact.ninja/fact";
    setLoading(true);
    setError(undefined);

    try {
      const response = await axios.get(CAT_FACT_URL);
      const result = response.data;
      const newFactId = Date.now();
      setCatFactsGroups((prevGroups) => [
        ...prevGroups,
        { id: newFactId, facts: [{ id: newFactId, text: result.fact }] },
      ]);
    } catch (error: any) {
     
      setError(error.message);
    } finally {
      setLoading(false);
      setIsFirstLoad(false);
    }
  };

  const deleteAllData = () => {
    setCatFactsGroups([]);
  };

  const deleteGroup = (id: number) => {
    setCatFactsGroups((prevGroups) => prevGroups.filter(group => group.id !== id));
  };

  useEffect(() => {}, []);

  return (
    <Lesson11Wrapper>
      {isFirstLoad && !loading && <Button onClick={fetchCatFacts}>GET INFO ABOUT CATS</Button>}
      {!loading && !isFirstLoad && <Button onClick={fetchCatFacts}>GET MORE INFO</Button>}
      {catFactsGroups.length > 0 && <Button onClick={deleteAllData}>DELETE ALL DATA</Button>}
      {loading && <Spinner />}
      {error && !loading && <Button onClick={fetchCatFacts}>RETRY</Button>}
      {catFactsGroups.length > 0 && (
        <DataContainer>
          {catFactsGroups.map((group, groupIndex) => (
            <Card key={group.id}>
              <h4>Group {groupIndex + 1}</h4>
              {group.facts.map((fact, index) => (
                <div key={fact.id} className="fact-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <ResultBlock style={{ marginBottom: '10px' }}>{`${index + 1}. ${fact.text}`}</ResultBlock>
                    <Button onClick={() => deleteGroup(group.id)} style={{ alignSelf: 'flex-start' }}>DELETE</Button>
                  </div>
                  <CatImage src={`https://cataas.com/cat?${fact.id}`} alt="Cat" style={{ height: 'auto', maxHeight: '100px', borderRadius: '8px' }} />
                </div>
              ))}
            </Card>
          ))}
        </DataContainer>
      )}
      {error && <ErrorBlock>{error}</ErrorBlock>}
    </Lesson11Wrapper>
  );
};

export default Lesson11;
