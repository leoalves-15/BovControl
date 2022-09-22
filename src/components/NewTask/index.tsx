import React, { useState, useContext } from "react";
import { Container, AddButon } from "./styles";
import FormTask from "../FormTask";
import { TasksComponents } from "./NewTask.types";
import { ContextNewTasks } from "../../Contexts/ContextAddTasks/ContextNewTasks";

const NewTask = () => {
  // const { tasks, setTasks } = useContext(ContextNewTasks);

  const [qtdTasks, setQtdTasks] = useState<TasksComponents[]>([
    { Id: 1, Task: <FormTask /> },
  ]);

  const addTask = () => {
    setQtdTasks((prev) => [
      ...prev,
      { Id: prev[prev.length - 1].Id + 1, Task: <FormTask /> },
    ]);
  };

  return (
    <Container>
      {qtdTasks.map((Item) => {
        return Item.Task;
      })}
      <AddButon onClick={() => addTask()}> Create CheckList</AddButon>
    </Container>
  );
};

export default NewTask;
