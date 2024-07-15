import { useQuery } from "@tanstack/react-query";
import { fetchSearchingResult } from "../../apis/table/table";
import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { locationState } from "../../recoil/locationState/atom";
import Card from "../../components/Card";
import SearchingBar from "../../components/SearchingBar";

const Container = styled.div``;

const Header = styled.form`
  width: 100%;
  height: 52px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.4),
    0 -5px 15px -4px rgba(0, 0, 0, 0.4);
`;

const InputBox = styled.input`
  width: 100%;
  height: inherit;
  padding: 12px;
  color: black;
  background-color: white;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

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

  const { isLoading, data } = useQuery({
    queryKey: ["searching"],
    queryFn: () => fetchSearchingResult(location.state.name),
    enabled: !!location.state,
    onError: (error) => {
      console.log(error);
    },
  });

  const list = data?.data;

  if (isLoading) return <div>로딩중...</div>;

  return (
    <Container>
      <SearchingBar
        text={text}
        setText={setText}
        placeholder={location.state.name}
      />
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
