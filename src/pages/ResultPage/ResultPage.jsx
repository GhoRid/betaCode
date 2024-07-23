import { useQuery } from "@tanstack/react-query";
import { fetchSearchingResult } from "../../apis/table/table";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { locationState } from "../../recoil/locationState/atom";
import Card from "../../components/Card";
import SearchingBar from "../../components/SearchingBar";
import Loader from "../../components/Loader";

const Container = styled.div``;

const ResultBox = styled.div`
  width: 100%;
`;

const Lists = styled.div`
  max-width: 400px;
  width: 95%;
  margin: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ResultPage = () => {
  const [text, setText] = useState("");
  const location = useLocation();
  const currrentLocationState = useRecoilValue(locationState);

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["searching"],
    queryFn: () => fetchSearchingResult(location.state.name),
    enabled: !!location.state,
    onError: (error) => {
      console.log(error);
    },
  });

  const list = data?.data;

  useEffect(() => {
    refetch();
  }, [location.state.name, refetch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <SearchingBar text={text} setText={setText} />
      <ResultBox>
        <Lists>
          {Array.isArray(list) &&
            list.map((element, index) => (
              <Card
                key={index}
                element={element}
                locationState={currrentLocationState}
              />
            ))}
        </Lists>
      </ResultBox>
    </Container>
  );
};

export default ResultPage;
