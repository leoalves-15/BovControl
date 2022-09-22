import React from "react";
import NewTask from "../components/NewTask";
import NewTasksProvider from "../Contexts/ContextAddTasks/ContextNewTasks";
const Create = () => {
  return (
    <NewTasksProvider>
      <>
        Create
        <NewTask />
      </>
    </NewTasksProvider>
  );
};

export default Create;
