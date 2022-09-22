import React, { createContext, useState, FC } from "react";
import { ContextTaskProp } from "./ContextNewTask.type";

export const ContextNewTasks = createContext({});

const NewTasksProvider: FC<ContextTaskProp> = ({ children }) => {
  const [first, setfirst] = useState("second");

  return (
    <ContextNewTasks.Provider value={{ first }}>
      {children}
    </ContextNewTasks.Provider>
  );
};

export default NewTasksProvider;
