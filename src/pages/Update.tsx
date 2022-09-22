import React from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";
import { useCurrentTask } from "../hooks/use-current-task";
import { useNavigate } from "react-router-dom";
import { NavIcons } from "../styles/generic-components";
import Left from "../assets/images/left.svg";

const Update = () => {
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
      <PageTitle>{currentTask?.farmer?.name ? `Task: ${currentTask?.farmer?.name}` : "Sorry! we can't find your task"}</PageTitle>
      {currentTask?.farmer?.name && <FormTask task={currentTask} disabled={false} />}
    </ContainPage>
  );
};

export default Update;
