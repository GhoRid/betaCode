import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchRecommandList } from "../../apis/table/table";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "./../../recoil/locationState/atom";
import HomeHeader from "./components/HomeHeader";
import Carousel from "../../components/Carousel";
import CategoryBox from "./components/CategoryBox";
import RecommendedPlaceBox from "./components/RecommandPlaceBox";
import advertiseImage from "../../assets/advertise.webp";
import Loader from "../../components/Loader";
import HomeSearchingBar from "./components/HomeSearchingBar";
import BannerImage from "../../assets/Banner.png";

const Container = styled.div`
  background-color: #fcfcfc;
`;

const CarouselBox = styled.div`
  height: 200px;
  margin: 2dvh;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
`;

const ContentsBoxShadow = styled.div`
  border-radius: 30px 30px 0 0;
  background-color: #9dbad6;
  padding-top: 4px;
`;

const ContentsBox = styled.div`
  width: 100%;
  border-radius: 30px 30px 0 0;
  background-color: #f7f9fc;
  position: relative; /* 독립적인 레이아웃 설정 */
`;

const Image = styled.img`
  width: 350px;
  height: auto;
`;

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
  }, [setCurrentLocationState]);

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
    return <Loader />;
  }

  return (
    <Container>
      <HomeHeader />
      {/* <CarouselBox>
        <Carousel images={CAROUSEL_IMAGES} />
      </CarouselBox> */}
      <Box>
        <Image src={BannerImage} alt="BTC logo" />
        <HomeSearchingBar />
        <CategoryBox />
      </Box>
      <ContentsBoxShadow>
        <ContentsBox>
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
