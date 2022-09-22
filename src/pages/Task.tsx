import React from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";
import { useCurrentTask } from "../hooks/use-current-task";
import { useNavigate } from "react-router-dom";
import { NavIcons } from "../styles/generic-components";
import Left from "../assets/images/left.svg";

const Task = () => {
  const { currentTask } = useCurrentTask();
  const navigate = useNavigate();

  return (
    <ContainPage>
      <NavIcons>
        <img
          width="20px"
          height="20px"
          src={Left}
          alt="Home"
          onClick={() => {
            navigate("/");
          }}
        />
      </NavIcons>
      <PageTitle>Task: {currentTask?.farmer?.name}</PageTitle>
      <FormTask task={currentTask} disabled={true} />
    </ContainPage>
  );
};

export default Task;
