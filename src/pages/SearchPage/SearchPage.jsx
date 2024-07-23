import { useState } from "react";
import styled from "styled-components";
import SearchingBar from "../../components/SearchingBar";
import advertiseImage from "../../assets/advertise.webp";
import Carousel from "../../components/Carousel";
import Ranking from "./components/Ranking";
import RecommendedPlace from "../../components/RecommendedPlace";
import { fetchRecommandList } from "../../apis/table/table";
import { useQuery } from "@tanstack/react-query";
import { locationState } from "../../recoil/locationState/atom";
import { useRecoilValue } from "recoil";
import Text from "../../components/Text";
import Loader from "../../components/Loader";

const Container = styled.div``;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const RecommandHeader = styled.div`
  padding: 0 3.5dvw;
  margin-top: 32px;
`;

const Title = styled.div`
  font-size: 16px;
`;

const CAROUSEL_IMAGES = [advertiseImage, advertiseImage, advertiseImage];

const SearchPage = () => {
  const [text, setText] = useState("");
  const currrentLocationState = useRecoilValue(locationState);

  const { isLoading, data } = useQuery({
    queryKey: ["searchPage"],
    cacheTime: 5000,
    staleTime: 5000,
    queryFn: fetchRecommandList,
    onError: (e) => {
      console.log(e);
    },
  });

  const recommendedList = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <SearchingBar text={text} setText={setText} placeholder="가게 이름" />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <Ranking />
      <RecommandHeader>
        <Title>
          <Text $fontSize="18px" $fontWeight="500">
            추천 맛집
          </Text>
        </Title>
      </RecommandHeader>
      <RecommendedPlace
        recommendedList={recommendedList}
        locationState={currrentLocationState}
      />
    </Container>
  );
};

export default SearchPage;
