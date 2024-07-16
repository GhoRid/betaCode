import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "../../components/Carousel";
import RecommendedPlace from "../../components/RecommendedPlace";
import CategoryBox from "../../components/CategoryBox";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommandList } from "../../apis/table/table";
import { useEffect } from "react";
import advertiseImage from "../../assets/advertise.png";
import { useRecoilState } from "recoil";
import { locationState } from "./../../recoil/locationState/atom";
import Text from "../../components/Text";

const Container = styled.div`
  /* width: 100%; */
  /* position: relative; */
`;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const RecommandHeader = styled.div`
  margin-top: 32px;
`;

const Title = styled.div`
  margin-left: 5%;
  font-size: 16px;
`;

const CAROUSEL_IMAGES = [advertiseImage, advertiseImage, advertiseImage];

const HomePage = () => {
  const [currentLocationState, setCurrentLocationState] =
    useRecoilState(locationState);

  useEffect(() => {
    let watchId;

    if (navigator.geolocation) {
      watchId = navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocationState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setCurrentLocationState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      setCurrentLocationState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }

    return () => {
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["list"],
    queryFn: fetchRecommandList,
    cacheTime: 10000,
    staleTime: 10000,
    onError: (e) => {
      console.log(e);
    },
  });

  const recommendedList = data?.data;

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Container>
      <HomeHeader />
      <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox>
      <CategoryBox />
      <RecommandHeader>
        <Title>
          <Text $fontSize="20px" $fontWeight="800" $textColor="#0047FC">
            여기
          </Text>{" "}
          <Text $fontSize="18px">어때요?</Text>
        </Title>
      </RecommandHeader>
      <RecommendedPlace
        recommendedList={recommendedList}
        locationState={currentLocationState}
      />
    </Container>
  );
};

export default HomePage;
