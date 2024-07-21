import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import Carousel from "../../components/Carousel";
import CategoryBox from "./components/CategoryBox";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommandList } from "../../apis/table/table";
import { useEffect } from "react";
import advertiseImage from "../../assets/advertise.png";
import { useRecoilState } from "recoil";
import { locationState } from "./../../recoil/locationState/atom";
import RecommendedPlaceBox from "./components/RecommandPlaceBox";

const Container = styled.div`
  background-color: #4887e4;
`;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh 3.5dvw;
  position: relative;
`;

const ContentsBoxShadow = styled.div`
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: #8eabc6;
  padding-top: 8px;
  margin-top: 28px;
`;

const ContentsBox = styled.div`
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: #f7f9fc;
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
      <ContentsBoxShadow>
        <ContentsBox>
          <CategoryBox />
          <RecommendedPlaceBox
            recommendedList={recommendedList}
            currentLocationState={currentLocationState}
          />
        </ContentsBox>
      </ContentsBoxShadow>
    </Container>
  );
};

export default HomePage;
