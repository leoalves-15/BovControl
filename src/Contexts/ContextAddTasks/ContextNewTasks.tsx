import React, { createContext, useState, FC } from "react";
import { ContextTaskProp } from "./ContextNewTask.type";
import { task } from "../../types/Task.type";
import { createTask } from "../../services/createTask";

export const ContextNewTasks = createContext({});

const NewTasksProvider: FC<ContextTaskProp> = ({ children }) => {
  const [tasks, setTasks] = useState<task[]>([]);

  const createTasks = () => {
    createTask(tasks)
  };

  return (
    <ContextNewTasks.Provider value={{ tasks, setTasks, createTasks }}>
      {children}
    </ContextNewTasks.Provider>
  );
};

export default NewTasksProvider;
