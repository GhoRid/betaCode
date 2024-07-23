import styled from "styled-components";
import Text from "../../../components/Text";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  z-index: 4;
`;

const UpBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 24px 4px;
  border-radius: 0 0 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  background-color: #4887e4;
  box-sizing: border-box; /* border-box로 설정 */
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FloorButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dropdown = styled.div`
  width: 100%;
  background-color: #4887e4;
  border-radius: 0 0 20px 20px;
  transform: translateY(${({ $isOpen }) => ($isOpen ? "-60px" : "-100%")});
  transition: transform 0.3s ease;
  z-index: 1;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;

const DropdownItem = styled.div`
  margin: 0 12px;
  padding: 16px 38px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  border-top: 1px solid #fff;
`;

const TablePageHeader = ({
  name,
  currentFloor,
  setCurrentFloor,
  totalFloor,
}) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFloorSelect = (selectedFloor) => {
    setCurrentFloor(selectedFloor);
    setIsDropdownOpen(false);
  };

  return (
    <Container>
      <UpBox>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.66667 1.33337L1 8.00004M1 8.00004L7.66667 14.6667M1 8.00004H21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Box>
          <Text $fontSize="24px" $fontWeight="600" $textColor="white">
            {name}
          </Text>
          <FloorButton
            onClick={handleDropdownToggle}
            style={{ cursor: "pointer" }}
          >
            <Text $fontSize="24px" $fontWeight="600" $textColor="white">
              {currentFloor}
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
                fill="white"
              />
            </svg>
          </FloorButton>
        </Box>
      </UpBox>
      <Dropdown $isOpen={isDropdownOpen}>
        <DropdownItem>
          <Text $fontSize="24px" $fontWeight="600">
            빈칸
          </Text>
        </DropdownItem>
        {totalFloor.map((floor, index) => (
          <DropdownItem key={index} onClick={() => handleFloorSelect(floor)}>
            <Text $fontSize="24px" $fontWeight="600" $textColor="white">
              {floor}
            </Text>
          </DropdownItem>
        ))}
      </Dropdown>
    </Container>
  );
};

export default TablePageHeader;
