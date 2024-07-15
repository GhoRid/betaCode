import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as Searching } from "../assets/icons/Searching.svg";

const Container = styled.div`
  max-width: 500px;
  width: 100vw;
  max-height: 100px;
  height: 7vh;
  height: 7dvh; /* Mobile */

  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4등분 */
  border-top: 1px solid #e0e0e0;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavigationBar = () => {
  return (
    <Container>
      <NavLink to="/">
        <Box>
          <svg
            width="28"
            height="23"
            viewBox="0 0 28 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4858 0.178545C14.2057 -0.0595152 13.7944 -0.0595152 13.5143 0.178545L4.76428 7.61605C4.76411 7.61619 4.76395 7.61633 4.76378 7.61647L1.01428 10.8035C0.698673 11.0718 0.660296 11.5451 0.928561 11.8607C1.19683 12.1763 1.67015 12.2147 1.98575 11.9465L4.50002 9.80933V20.75C4.50002 21.8546 5.39545 22.75 6.50002 22.75H21.5C22.6046 22.75 23.5 21.8546 23.5 20.75V9.80933L26.0143 11.9465C26.3299 12.2147 26.8032 12.1763 27.0715 11.8607C27.3397 11.5451 27.3014 11.0718 26.9858 10.8035L23.2364 7.61658C23.2362 7.6164 23.236 7.61622 23.2358 7.61605L14.4858 0.178545ZM22 8.53433L14 1.73433L6.00002 8.53433V20.75C6.00002 21.0261 6.22387 21.25 6.50002 21.25H21.5C21.7762 21.25 22 21.0261 22 20.75V8.53433Z"
              fill="black"
            />
          </svg>
        </Box>
      </NavLink>
      <NavLink to="/search">
        <Box>
          <Searching />
        </Box>
      </NavLink>
      <NavLink to="/map">
        <Box>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 11.25C7 8.60616 7.91044 6.62566 9.3251 5.3027C10.7477 3.97228 12.7418 3.25 15 3.25C17.2565 3.25 19.2507 3.97834 20.6742 5.31279C22.0901 6.64007 23 8.62132 23 11.25C23 15.0848 20.9285 18.9864 18.766 21.9948C17.6945 23.4855 16.6217 24.7282 15.8167 25.5981C15.4954 25.9454 15.2174 26.2325 15 26.4515C14.7826 26.2325 14.5046 25.9454 14.1833 25.5981C13.3783 24.7282 12.3055 23.4855 11.234 21.9948C9.07153 18.9864 7 15.0848 7 11.25ZM14.4903 28.0501C14.4905 28.0503 14.4906 28.0505 15 27.5L14.4906 28.0505C14.7781 28.3165 15.2219 28.3165 15.5094 28.0505L15 27.5C15.5094 28.0505 15.5095 28.0503 15.5097 28.0501L15.5103 28.0496L15.5121 28.048L15.5179 28.0426L15.5389 28.0229C15.5569 28.0059 15.583 27.9812 15.6166 27.9491C15.6838 27.8848 15.7811 27.7907 15.9041 27.6687C16.1501 27.4247 16.4995 27.0688 16.9177 26.6169C17.7533 25.7139 18.868 24.423 19.984 22.8703C22.1965 19.7922 24.5 15.5687 24.5 11.25C24.5 8.25368 23.4511 5.85993 21.7001 4.21846C19.9568 2.58416 17.576 1.75 15 1.75C12.4257 1.75 10.0448 2.57594 8.30054 4.20713C6.54831 5.84578 5.5 8.24028 5.5 11.25C5.5 15.5687 7.80347 19.7922 10.016 22.8703C11.132 24.423 12.2467 25.7139 13.0823 26.6169C13.5005 27.0688 13.8499 27.4247 14.0959 27.6687C14.2189 27.7907 14.3162 27.8848 14.3834 27.9491C14.417 27.9812 14.4431 28.0059 14.4611 28.0229L14.4821 28.0426L14.4879 28.048L14.4897 28.0496L14.4903 28.0501ZM12 11.25C12 9.59315 13.3431 8.25 15 8.25C16.6569 8.25 18 9.59315 18 11.25C18 12.9069 16.6569 14.25 15 14.25C13.3431 14.25 12 12.9069 12 11.25ZM15 6.75C12.5147 6.75 10.5 8.76472 10.5 11.25C10.5 13.7353 12.5147 15.75 15 15.75C17.4853 15.75 19.5 13.7353 19.5 11.25C19.5 8.76472 17.4853 6.75 15 6.75Z"
              fill="black"
            />
          </svg>
        </Box>
      </NavLink>
      <NavLink>
        <Box>
          <svg
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 5.75C5.75 3.40279 7.65279 1.5 10 1.5C12.3472 1.5 14.25 3.40279 14.25 5.75C14.25 8.09721 12.3472 10 10 10C7.65279 10 5.75 8.09721 5.75 5.75ZM10 0C6.82436 0 4.25 2.57436 4.25 5.75C4.25 8.92564 6.82436 11.5 10 11.5C13.1756 11.5 15.75 8.92564 15.75 5.75C15.75 2.57436 13.1756 0 10 0ZM2 19.9167C2 18.0117 3.50084 16.5 5.3125 16.5H14.6875C16.4992 16.5 18 18.0117 18 19.9167V21.25H2V19.9167ZM5.3125 15C2.63684 15 0.5 17.2193 0.5 19.9167V22C0.5 22.4142 0.835786 22.75 1.25 22.75H18.75C19.1642 22.75 19.5 22.4142 19.5 22V19.9167C19.5 17.2193 17.3632 15 14.6875 15H5.3125Z"
              fill="black"
            />
          </svg>
        </Box>
      </NavLink>
    </Container>
  );
};

export default NavigationBar;
