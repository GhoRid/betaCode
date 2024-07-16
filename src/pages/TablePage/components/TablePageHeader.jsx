import styled from "styled-components";
import Text from "../../../components/Text";

const Contianer = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100%;
  height: 60px;
  padding: 0 24px 4px;
  background-color: #c4e3ff;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TablePageHeader = ({ name, floor, setFloor }) => {
  return (
    <Contianer>
      <svg
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.66667 1.33337L1 8.00004M1 8.00004L7.66667 14.6667M1 8.00004H21"
          stroke="#28303F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Box>
        <Text $fontSize="24px" $fontWeight="500">
          {name}
        </Text>
        <Text $fontSize="24px" $fontWeight="700">
          {floor}
        </Text>
        <svg
          width="18"
          height="9"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.414376 0.531506C0.673133 0.20806 1.1451 0.155619 1.46855 0.414376L6.00003 4.03956L10.5315 0.414376C10.855 0.155619 11.3269 0.20806 11.5857 0.531506C11.8444 0.854953 11.792 1.32692 11.4685 1.58568L6.46855 5.58568C6.19464 5.80481 5.80542 5.80481 5.53151 5.58568L0.531506 1.58568C0.20806 1.32692 0.155619 0.854953 0.414376 0.531506Z"
            fill="#28303F"
          />
        </svg>
      </Box>
    </Contianer>
  );
};

export default TablePageHeader;
