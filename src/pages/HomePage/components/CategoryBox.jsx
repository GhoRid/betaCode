import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`;

const ElementBox = styled.div`
  text-align: center;
`;

const IconBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #c4e3ff;
  margin-bottom: 4px;
`;

const CategoryBox = () => {
  return (
    <Container>
      <ElementBox>
        <IconBox>
          <svg
            width="22"
            height="29"
            viewBox="0 0 22 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.0509 0.423462C19.6966 0.423462 19.3569 0.571241 19.1063 0.834289C18.8558 1.09734 18.7151 1.45411 18.7151 1.82611V9.48459L17.3792 10.4244V1.82611C17.3792 1.45411 17.2385 1.09734 16.988 0.834289C16.7374 0.571241 16.3977 0.423462 16.0434 0.423462C15.6891 0.423462 15.3493 0.571241 15.0988 0.834289C14.8482 1.09734 14.7075 1.45411 14.7075 1.82611V10.4244L13.3716 9.48459V1.82611C13.3716 1.45411 13.2309 1.09734 12.9804 0.834289C12.7299 0.571241 12.3901 0.423462 12.0358 0.423462C11.6815 0.423462 11.3417 0.571241 11.0912 0.834289C10.8407 1.09734 10.6999 1.45411 10.6999 1.82611V10.242C10.7011 10.473 10.7565 10.7002 10.8614 10.9033C10.9663 11.1064 11.1173 11.2792 11.3011 11.4062L14.7075 13.8048V27.0738C14.7075 27.4458 14.8482 27.8026 15.0988 28.0657C15.3493 28.3287 15.6891 28.4765 16.0434 28.4765C16.3977 28.4765 16.7374 28.3287 16.988 28.0657C17.2385 27.8026 17.3792 27.4458 17.3792 27.0738V13.8048L20.7857 11.4062C20.9694 11.2792 21.1204 11.1064 21.2253 10.9033C21.3302 10.7002 21.3857 10.473 21.3868 10.242V1.82611C21.3868 1.45411 21.2461 1.09734 20.9955 0.834289C20.745 0.571241 20.4052 0.423462 20.0509 0.423462ZM6.69235 0.423462C4.9209 0.423462 3.22199 1.16236 1.96938 2.4776C0.716771 3.79284 0.0130615 5.57669 0.0130615 7.43672V15.8526C0.0130615 16.2246 0.153804 16.5814 0.404326 16.8445C0.654848 17.1075 0.994628 17.2553 1.34892 17.2553H5.3565V27.0738C5.3565 27.4458 5.49724 27.8026 5.74776 28.0657C5.99828 28.3287 6.33806 28.4765 6.69235 28.4765C7.04665 28.4765 7.38643 28.3287 7.63695 28.0657C7.88747 27.8026 8.02821 27.4458 8.02821 27.0738V1.82611C8.02821 1.45411 7.88747 1.09734 7.63695 0.834289C7.38643 0.571241 7.04665 0.423462 6.69235 0.423462ZM5.3565 14.45H2.68478V7.43672C2.68434 6.56616 2.94107 5.71689 3.41958 5.00595C3.89808 4.29501 4.57481 3.7574 5.3565 3.46722V14.45Z"
              fill="white"
            />
          </svg>
        </IconBox>
        <p>밥집</p>
      </ElementBox>
      <ElementBox>
        <IconBox>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.9655 3.02139C27.1205 2.82589 27.2177 2.59088 27.2461 2.34297C27.2744 2.09507 27.2327 1.84418 27.1258 1.61874C27.0175 1.39141 26.8472 1.19932 26.6345 1.06459C26.4218 0.929872 26.1753 0.858013 25.9235 0.8573H1.87807C1.62628 0.858013 1.37981 0.929872 1.16709 1.06459C0.954376 1.19932 0.784063 1.39141 0.675794 1.61874C0.56885 1.84418 0.527183 2.09507 0.555515 2.34297C0.583847 2.59088 0.681046 2.82589 0.836097 3.02139L12.5649 17.6891V24.9028H4.88375C4.52946 24.9028 4.18968 25.0435 3.93915 25.294C3.68863 25.5445 3.54789 25.8843 3.54789 26.2386C3.54789 26.5929 3.68863 26.9327 3.93915 27.1832C4.18968 27.4337 4.52946 27.5745 4.88375 27.5745H22.9178C23.2721 27.5745 23.6119 27.4337 23.8624 27.1832C24.113 26.9327 24.2537 26.5929 24.2537 26.2386C24.2537 25.8843 24.113 25.5445 23.8624 25.294C23.6119 25.0435 23.2721 24.9028 22.9178 24.9028H15.2367V17.6891L26.9655 3.02139ZM4.65665 3.52902H23.1449L19.9389 7.53659H7.91615L4.65665 3.52902ZM13.9008 15.0842L10.0001 10.2083H17.8015L13.9008 15.0842Z"
              fill="#FDFEFF"
            />
          </svg>
        </IconBox>
        <p>술집</p>
      </ElementBox>
      <ElementBox>
        <IconBox>
          <svg
            width="28"
            height="25"
            viewBox="0 0 28 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.69317 18.8951H15.0366C16.8081 18.8951 18.507 18.1914 19.7596 16.9388C21.0122 15.6862 21.7159 13.9873 21.7159 12.2158V10.88H23.0518C24.1146 10.88 25.134 10.4578 25.8855 9.70619C26.6371 8.95463 27.0593 7.93528 27.0593 6.87241C27.0593 5.80953 26.6371 4.79019 25.8855 4.03862C25.134 3.28706 24.1146 2.86483 23.0518 2.86483H21.7159V1.52897C21.7159 1.17468 21.5752 0.834901 21.3246 0.584379C21.0741 0.333857 20.7343 0.193115 20.38 0.193115H4.34974C3.99545 0.193115 3.65567 0.333857 3.40514 0.584379C3.15462 0.834901 3.01388 1.17468 3.01388 1.52897V12.2158C3.01388 13.9873 3.71759 15.6862 4.9702 16.9388C6.22281 18.1914 7.92171 18.8951 9.69317 18.8951ZM21.7159 5.53655H23.0518C23.4061 5.53655 23.7458 5.67729 23.9964 5.92781C24.2469 6.17834 24.3876 6.51812 24.3876 6.87241C24.3876 7.2267 24.2469 7.56648 23.9964 7.817C23.7458 8.06753 23.4061 8.20827 23.0518 8.20827H21.7159V5.53655ZM5.6856 2.86483H19.0442V12.2158C19.0442 13.2787 18.622 14.2981 17.8704 15.0496C17.1188 15.8012 16.0995 16.2234 15.0366 16.2234H9.69317C8.6303 16.2234 7.61096 15.8012 6.85939 15.0496C6.10782 14.2981 5.6856 13.2787 5.6856 12.2158V2.86483ZM25.7235 21.5669H1.67802C1.32373 21.5669 0.983949 21.7076 0.733427 21.9581C0.482905 22.2086 0.342163 22.5484 0.342163 22.9027C0.342163 23.257 0.482905 23.5968 0.733427 23.8473C0.983949 24.0978 1.32373 24.2386 1.67802 24.2386H25.7235C26.0778 24.2386 26.4175 24.0978 26.6681 23.8473C26.9186 23.5968 27.0593 23.257 27.0593 22.9027C27.0593 22.5484 26.9186 22.2086 26.6681 21.9581C26.4175 21.7076 26.0778 21.5669 25.7235 21.5669Z"
              fill="white"
            />
          </svg>
        </IconBox>
        <p>카페</p>
      </ElementBox>
    </Container>
  );
};

export default CategoryBox;
