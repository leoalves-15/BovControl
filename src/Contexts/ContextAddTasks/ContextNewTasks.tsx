import React, { createContext, useState } from "react";
import { ContextTaskProp } from "./ContextNewTask.type";
import { ReactNode } from "react";
import { task } from "../../types/Task.type";
import { createTask } from "../../services/createTask";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../Modals/Success";
import ErrorModal from "../../Modals/Error";

export const ContextNewTasks = createContext<ContextTaskProp>(
  {} as ContextTaskProp
);

const NewTasksProvider = (props: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<task[]>([] as task[]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isErro, setError] = useState(false);

  const createTasks = async () => {
    const response = await createTask(tasks);
    if (response?.idCreate) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        navigate("/");
      }, 2000);
    } 
    if(!response) {
      setError(true);
      setTimeout(() => {
        setError(false);
        navigate("/");
      }, 2000);
    }
  };

  return (
    <ContextNewTasks.Provider value={{ setTasks, createTasks, tasks }}>
      {isErro && <ErrorModal />}
      {isSuccess && <SuccessModal />}
      {props.children}
    </ContextNewTasks.Provider>
  );
};

export default NewTasksProvider;
