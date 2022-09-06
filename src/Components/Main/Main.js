import React, { useState, useMemo } from "react";
import Trash from "../../assets/lixeira.png";
import TrashAll from "../../assets/teste.png";
import Edit from "../../assets/editar.png";
import {
  clearAll,
  addTask,
  removeTask,
  windowEditTask,
  editText,
  markCheck,
} from "./utils/functions";
import {
  MainS,
  TaskBox,
  Input,
  TaskButton,
  ButtonRemoveAll,
  FigureRemove,
  ImgRemove,
  TaskBody,
  Ul,
  LeftSideTask,
  RightSideTask,
  WriteTask,
  Figure,
  Img,
  ButtonRemove,
  ButtonEdit,
  NewWindow,
  WindowBody,
  BoxButtonsEdit,
  ButtonsEdit,
} from "./StylesM";

const Main = () => {
  const [Task, setTask] = useState("");
  const [List, setList] = useState([]);
  const [newEditTask, setnewEditTask] = useState("");
  const [isChecked, setisChecked] = useState(false);
  const providerList = useMemo(() => ({ List, setList }), [List, setList]);
  const providerTask = useMemo(() => ({ Task, setTask }), [Task, setTask]);
  const providernewEditTask = useMemo(
    () => ({ newEditTask, setnewEditTask }),
    [newEditTask, setnewEditTask]
  );
  const providerCheck = useMemo(
    () => ({ isChecked, setisChecked }),
    [isChecked, setisChecked]
  );

  // console.log("Informações do input", TaskInformation);
  // console.log("Abriu", windowEditTask);
  // console.log("As informações estão guardadas aqui", List);

  return (
    <MainS>
      <TaskBox>
        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={Task}
          />
          <TaskButton onClick={() => addTask(providerTask, providerList)}>
            Add
          </TaskButton>
        </form>
        <ButtonRemoveAll onClick={() => clearAll(providerList)}>
          <FigureRemove>
            <ImgRemove src={TrashAll} alt="Icon to remove task" />
          </FigureRemove>
        </ButtonRemoveAll>
      </TaskBox>
      {List.map((item) => (
        <TaskBody>
          <Ul>
            <LeftSideTask>
              <input
                className="checkInformation"
                type="checkbox"
                onClick={() => markCheck(providerCheck)}
              />
              <WriteTask className="unChecked">
                {item.TaskInformation}
              </WriteTask>
            </LeftSideTask>
            <RightSideTask>
              <ButtonRemove onClick={() => removeTask(item.id, providerList)}>
                <Figure>
                  <Img src={Trash} alt="Icon to remove task" />
                </Figure>
              </ButtonRemove>
              <ButtonEdit
                onClick={() =>
                  windowEditTask(item.id, providernewEditTask, providerList)
                }
              >
                <Figure>
                  <Img src={Edit} alt="Icon to edit task" />
                </Figure>
              </ButtonEdit>
            </RightSideTask>
          </Ul>
        </TaskBody>
      ))}
      <NewWindow className="OpenWindow">
        <WindowBody className="BodyWindow">
          <h2>Edit your task</h2>
          <input
            onChange={(e) =>
              setnewEditTask({
                ...newEditTask,
                TaskInformation: e.target.value,
              })
            }
            type="text"
            value={newEditTask.TaskInformation}
          />
          <BoxButtonsEdit>
            <ButtonsEdit
              onClick={(e) =>
                windowEditTask(null, providernewEditTask, providerList)
              }
            >
              Close
            </ButtonsEdit>
            <ButtonsEdit
              onClick={() => {
                editText(providerList, providernewEditTask);
                windowEditTask(null, providernewEditTask, providerList);
              }}
            >
              OK
            </ButtonsEdit>
          </BoxButtonsEdit>
        </WindowBody>
      </NewWindow>
    </MainS>
  );
};

export default Main;
