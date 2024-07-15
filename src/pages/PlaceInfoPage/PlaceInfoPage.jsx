import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import MapBox from "./components/MapBox";
import Text from "../../components/Text";
import PlaceInfo from "./components/PlaceInfo";
import Review from "./components/Review";
import { useQuery } from "@tanstack/react-query";
import { fetchPlaceInfo } from "../../apis/table/table";
import { useEffect, useRef } from "react";

const Container = styled.div`
  width: 100%;
  background-color: #e5f3ff;
  position: relative;
`;

const MockImage = styled.img`
  width: 100%;
  height: 200px;
  z-index: -1;
`;

const ButtonBox = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
`;

const RestTableButton = styled.button`
  max-width: 400px;
  width: 90%;
  height: 80px;
  border-radius: 25px;
  background-color: #c4e3ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Box = styled.div`
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 180px;
`;

const PlaceInfoPage = () => {
  const { place: name } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = useQuery({
    queryKey: ["place"],
    enabled: !!name,
    cacheTime: 0,
    staleTime: 0,
    queryFn: () => fetchPlaceInfo(name),
    onError: (e) => {
      console.log(e);
    },
  });

  const { img, lefttable, alltable, memberposition } = data?.data || {};

  return (
    <Container>
      <Header />
      <MockImage src={img} />
      <Box>
        <PlaceInfo infoList={data?.data} />
        <ButtonBox>
          <RestTableButton>
            <Text $fontSize="18px">남은 테이블</Text>
            <Text $fontSize="20px" $fontWeight="500" $textColor="#234993">
              {lefttable} / {alltable}
            </Text>
          </RestTableButton>
        </ButtonBox>
        <MapBox position={memberposition} />
        <Review />
        {/* <MenuList /> */}
      </Box>
    </Container>
  );
};

export default PlaceInfoPage;
