import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.form`
  width: 100%;
  height: 52px;
  background-color: white;
  border-radius: 0 0 20px 20px;
  padding: 0 16px;

  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px -4px rgba(0, 0, 0, 0.4),
    0 -5px 15px -4px rgba(0, 0, 0, 0.4);
`;

const InputBox = styled.input`
  width: 100%;
  height: inherit;
  padding: 12px;
  color: black;
  background-color: white;
  font-size: 20px;
  border: none;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

const SearchingBar = ({ text, setText, placeholder }) => {
  const navigate = useNavigate();
  const ALLOWED_TEXT_REG_EXP = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/;

  const handleNameChange = (e) => {
    const newName = e.target.value;
    if (!ALLOWED_TEXT_REG_EXP.test(newName)) {
      setText("");
      return;
    }
    setText(newName);
  };

  const handleKeyDown = (e) => {
    if (e.code !== "Enter" && e.code !== "NumpadEnter") {
      return;
    }
    e.preventDefault();
    navigate("/search/result", { state: { name: text } });
  };

  return (
    <Header>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2803 15.2197C15.9874 14.9268 15.5126 14.9268 15.2197 15.2197C14.9268 15.5126 14.9268 15.9874 15.2197 16.2803L16.2803 15.2197ZM22.7197 23.7803C23.0126 24.0732 23.4874 24.0732 23.7803 23.7803C24.0732 23.4874 24.0732 23.0126 23.7803 22.7197L22.7197 23.7803ZM9.5 17.5C5.08172 17.5 1.5 13.9183 1.5 9.5H0C0 14.7467 4.2533 19 9.5 19V17.5ZM17.5 9.5C17.5 13.9183 13.9183 17.5 9.5 17.5V19C14.7467 19 19 14.7467 19 9.5H17.5ZM9.5 1.5C13.9183 1.5 17.5 5.08172 17.5 9.5H19C19 4.2533 14.7467 0 9.5 0V1.5ZM9.5 0C4.2533 0 0 4.2533 0 9.5H1.5C1.5 5.08172 5.08172 1.5 9.5 1.5V0ZM15.2197 16.2803L22.7197 23.7803L23.7803 22.7197L16.2803 15.2197L15.2197 16.2803Z"
          fill="#65B2FB"
        />
      </svg>
      <InputBox
        id="name"
        value={text}
        placeholder={placeholder}
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
        type="text"
        required
      ></InputBox>
    </Header>
  );
};

export default SearchingBar;
