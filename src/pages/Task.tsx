import React, {useEffect} from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";
import { useCurrentTask } from "../hooks/use-current-task";

const Task = () => {
  const {currentTask} = useCurrentTask();
  useEffect(() => {
    console.log(currentTask)
  }, [currentTask])
  
  return (
    <ContainPage>
      <PageTitle>Task:</PageTitle>
      <FormTask disabled={true}/>
    </ContainPage>
  );
};

export default Task;
