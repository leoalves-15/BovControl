import React, { createContext, useState } from "react";
import { ContextTaskProp } from "./ContextNewTask.type";
import { ReactNode } from "react";
import { task } from "../../types/Task.type";
import { createTask } from "../../services/createTask";
import { useNavigate } from "react-router-dom";

export const ContextNewTasks = createContext<ContextTaskProp>(
  {} as ContextTaskProp
);

const NewTasksProvider = (props: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<task[]>([] as task[]);

  const createTasks = async () => {
    await createTask(tasks);
    navigate("/");
  };

  return (
    <ContextNewTasks.Provider value={{ setTasks, createTasks }}>
      {props.children}
    </ContextNewTasks.Provider>
  );
};

export default NewTasksProvider;
