import React, { useState, useContext } from "react";
import { Container, AddButon } from "./styles";
import FormTask from "../FormTask";
import { TasksComponents } from "./NewTask.types";
import { ContextNewTasks } from "../../Contexts/ContextAddTasks/ContextNewTasks";
import { task } from "../../types/Task.type";

const NewTask = () => {
  const { setTasks, createTasks } = useContext(ContextNewTasks);

  const addTask = (e: any, data: task) => {
    e.preventDefault();
    setQtdTasks((prev) => [
      ...prev,
      {
        Id: prev[prev.length - 1].Id + 1,
        Task: <FormTask send={addTask} textButton="Add task" />,
      },
    ]);
    setTasks((prev) => [
      ...prev,
      { ...data, id: `${Math.floor(Date.now() * Math.random())}` },
    ]);
  };

  const [qtdTasks, setQtdTasks] = useState<TasksComponents[]>([
    { Id: 1, Task: <FormTask send={addTask} textButton="Add task" /> },
  ]);

  return (
    <Container>
      {qtdTasks.map((Item) => {
        return Item.Task;
      })}
      <AddButon
        onClick={() => {
          createTasks();
        }}
      >
        Create CheckList
      </AddButon>
    </Container>
  );
};

export default NewTask;
