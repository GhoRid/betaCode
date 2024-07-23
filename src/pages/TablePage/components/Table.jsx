import styled from "styled-components";
import Text from "./../../../components/Text";

const Container = styled.div`
  position: absolute;
  z-index: 1;

  top: ${({ $py }) => $py}px;
  left: ${({ $px }) => $px}px;
  width: ${({ $lx }) => $lx}px;
  height: ${({ $ly }) => $ly}px;

  border-radius: 8px;
  border: 4px solid ${({ $inOn }) => ($inOn ? "#CFE6FF" : "#CBD0D5")};
  box-shadow: ${({ $inOn }) => ($inOn ? "" : "inset")} 0 4px 4px 2px
    rgba(0, 0, 0, 0.2);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: ${({ $inOn }) => ($inOn ? "#4887E4" : "#D9D9D9")};
  border: 4px solid ${({ $inOn }) => ($inOn ? "#4887E4" : "#C2C2C2")};
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Table = ({ tableInfo, ratio }) => {
  const { ison: inOn, lx, ly, peoples, px, py } = tableInfo;

  return (
    <Container
      $inOn={inOn}
      $lx={lx * ratio}
      $ly={ly * ratio}
      $px={px * ratio}
      $py={py * ratio}
    >
      <Box $inOn={inOn}>
        <Text $textColor="white" $fontSize="24px">
          {peoples}
        </Text>
        <Text $textColor="white" $fontSize="14px">
          인석
        </Text>
      </Box>
    </Container>
  );
};

export default Table;
