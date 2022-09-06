import React, { useState } from "react";

const addTask = ({ Task, setTask }, { List, setList }) => {
  const TaskInformation = { TaskInformation: Task, id: Math.random() };
  if (Task === "") {
    alert("You cannot add empty tasks");
  } else {
    setList((List) => [...List, TaskInformation]);
    setTask("");
  }
};

const removeTask = (id, { List, setList }) => {
  setList(List.filter((item) => item.id !== id));
};

const windowEditTask = (Task, { setnewEditTask }, { List, setList }) => {
  const openWindow = document.querySelector(".OpenWindow");
  if (openWindow.style.display === "none") {
    setnewEditTask(List.find((item) => item.id === Task));
    console.log("Testando aqui", setnewEditTask);
    openWindow.style.display = "flex";
  } else {
    openWindow.style.display = "none";
  }
};

const editText = ({ List, setList }, { newEditTask, setnewEditTask }) => {
  setList(
    List.map((item) => (item.id === newEditTask.id ? newEditTask : item))
  );
};

export { addTask, removeTask, windowEditTask, editText };
