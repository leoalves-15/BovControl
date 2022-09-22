import React, { createContext, useState } from "react";
import { ContextTaskProp } from "./ContextNewTask.type";
import { ReactNode } from "react";
import { task } from "../../types/Task.type";
import { createTask } from "../../services/createTask";

export const ContextNewTasks = createContext<ContextTaskProp>({} as ContextTaskProp);

const NewTasksProvider = ( props: {children: ReactNode;} ) => {
  const [tasks, setTasks] = useState<task[]>([] as task[]);

  const createTasks = () => {
    createTask(tasks)
  };

  return (
    <ContextNewTasks.Provider value={{ setTasks, createTasks }}>
      {props.children}
    </ContextNewTasks.Provider>
  );
};

export default NewTasksProvider;
