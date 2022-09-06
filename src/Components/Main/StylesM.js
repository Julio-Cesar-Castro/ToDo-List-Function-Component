import styled from "styled-components";

export const MainS = styled.div`
  width: 100%;
  height: calc(100vh - 15vh);
  background-color: #4d4d4d;
`;

export const TaskBox = styled.div`
  position: relative;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 30vw;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #222222;
  border-radius: 5px 0px 0px 5px;
  color: #fff;
  font-size: 16px;
`;

export const TaskButton = styled.button`
  width: 8vw;
  padding: 11px;
  background-color: rgba(232, 18, 36, 0.7);
  border: none;
  border-radius: 0px 5px 5px 0px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 1s;

  :hover {
    color: #222222;
  }
`;

export const ButtonRemoveAll = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const FigureRemove = styled.figure`
  width: 4vw;
  height: 7vh;
`;

export const ImgRemove = styled.img`
  width: 100%;
  height: 100%;
`;

export const TaskBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Ul = styled.ul`
  width: 40%;
  height: 6vh;
  margin: 7px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const LeftSideTask = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 15px;
  gap: 15px;
`;

export const RightSideTask = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const WriteTask = styled.li`
  list-style: none;
  font-size: 18px;

  .unChecked {
    text-decoration: none;
  }

  .Checked {
    text-decoration: line-through;
  }
`;

export const ButtonRemove = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ButtonEdit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Figure = styled.figure`
  width: 1.5vw;
  height: 3.5vh;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const NewWindow = styled.div`
  position: absolute;
  z-index: 1;
  top: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
`;

export const WindowBody = styled.div`
  width: 700px;
  height: 270px;
  border-radius: 10px;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  & > h2 {
    color: #fff;
    width: 60%;
    font-family: "Times New Roman", Times, serif;
  }

  & > input {
    width: 60%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #4d4d4d;
    color: #fff;
  }
`;

export const BoxButtonsEdit = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

export const ButtonsEdit = styled.button`
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
`;
