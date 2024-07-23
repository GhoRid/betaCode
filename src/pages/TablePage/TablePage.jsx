import styled from "styled-components";
import TablePageHeader from "./components/TablePageHeader";
import { useLocation } from "react-router-dom";
import Text from "../../components/Text";
import { fetchPlaceTableInfo } from "../../apis/table/table";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import TablesFrame from "./components/TablesFrame";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  margin: 12px 12px 0;
  padding: 8px 8px;
  border-bottom: 1px solid #4887e4;
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

const ZindexBox = styled.div`
  z-index: -100;
`;

const TablePage = () => {
  const location = useLocation();
  const name = location.state.place;
  const [currentFloor, setCurrentFloor] = useState("1층");
  const [floorTableList, setFloorTableList] = useState({});

  const { isLoading, data } = useQuery({
    queryKey: ["placeTableInfo", name],
    queryFn: () => fetchPlaceTableInfo(name),
    cacheTime: 10000,
    staleTime: 10000,
  });

  const tableDatas = data?.data || [];

  useEffect(() => {
    if (tableDatas.length > 0) {
      setCurrentFloor(tableDatas[0].floor);
    }
  }, [tableDatas]);

  useEffect(() => {
    const selectedFloorData = tableDatas.find(
      (data) => data.floor === currentFloor
    );
    if (selectedFloorData) {
      setFloorTableList(selectedFloorData);
    }
  }, [currentFloor, tableDatas]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Container>
      <TablePageHeader
        name={name}
        currentFloor={currentFloor}
        totalFloor={tableDatas.map((item) => item.floor)}
        setCurrentFloor={setCurrentFloor}
      />
      <ZindexBox>
        <TextBox>
          <Text>남은 테이블</Text>
          <Text $fontSize="24px" $fontWeight="600" $textColor="#4887E4">
            {floorTableList.lefttable}/{floorTableList.alltable}
          </Text>
        </TextBox>
        {floorTableList && <TablesFrame floorTableList={floorTableList} />}
      </ZindexBox>
    </Container>
  );
};

export default TablePage;
