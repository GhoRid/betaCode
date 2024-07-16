import styled from "styled-components";
import Table from "./Table";
import { useEffect, useState } from "react";

const Container = styled.div`
  overflow: scroll;
  position: relative;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 0 auto;
`;

const TablesFrame = ({ floorTableList = { tableConfigModels: [] } }) => {
  const { displaysizex, displaysizey } = floorTableList;
  const [ratio, setRatio] = useState(1);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const viewportWidth = window.innerWidth * 0.95;
      const viewportHeight = window.innerHeight * 0.95;
      const aspectRatio = displaysizex / displaysizey;

      let newWidth, newHeight;

      if (viewportWidth / viewportHeight > aspectRatio) {
        newHeight = viewportHeight;
        newWidth = newHeight * aspectRatio;
        setRatio(viewportHeight / displaysizey);
      } else {
        newWidth = viewportWidth;
        newHeight = newWidth / aspectRatio;
        setRatio(viewportWidth / displaysizex);
      }

      setDimensions({ width: newWidth, height: newHeight });
    };

    window.addEventListener("resize", calculateDimensions);
    calculateDimensions();

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [displaysizex, displaysizey]);

  return (
    <Container width={dimensions.width} height={dimensions.height}>
      {floorTableList.tableConfigModels &&
        floorTableList.tableConfigModels.map((tableInfo, index) => (
          <Table key={index} tableInfo={tableInfo} ratio={ratio} />
        ))}
    </Container>
  );
};

export default TablesFrame;
