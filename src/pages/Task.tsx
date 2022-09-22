import React from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";

const Task = () => {
  return (
    <ContainPage>
      <PageTitle>Task:</PageTitle>
      <FormTask />
    </ContainPage>
  );
};

export default Task;
