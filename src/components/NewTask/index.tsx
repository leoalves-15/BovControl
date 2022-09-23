import React, { useContext } from "react";
import { Container, AddButon } from "./styles";
import FormTask from "../FormTask";
import { ContextNewTasks } from "../../Contexts/ContextAddTasks/ContextNewTasks";
import { task } from "../../types/Task.type";

const NewTask = () => {
  const { setTasks, createTasks, tasks } = useContext(ContextNewTasks);

  const updateTask = (e: any, data: task) => {
    e.preventDefault();
    const sameIndex = (element: task) => {
      let idAux: string = element.id || "0";
      return idAux === data.id;
    };
    const found = tasks.findIndex(sameIndex);

    let taskAux = [...tasks];
    taskAux[found] = data;
    setTasks(taskAux);
  };

  const addTask = (e: any, data: task) => {
    e.preventDefault();
    setTasks((prev) => [...prev, { ...data}]);
  };

  return (
    <Container>
      <FormTask
        send={addTask}
        textButton="Add task"
        saveText="Save"
        update={updateTask}
      />
      {tasks.map((Item) => {
        return (
          <FormTask
            send={addTask}
            textButton="Add task"
            saveText="Save"
            update={updateTask}
          />
        );
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
