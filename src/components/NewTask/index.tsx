import React, { useState } from "react";
import { Container, AddButon } from "./styles";
import FormTask from "../FormTask";
import { TasksComponents } from "./NewTask.types";

const NewTask = () => {
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
      <AddButon onClick={() => addTask()}> Add Task </AddButon>
    </Container>
  );
};

export default NewTask;
