import React from "react";
import NewTask from "../components/NewTask";
import NewTasksProvider from "../Contexts/ContextAddTasks/ContextNewTasks";
import { ContainPage } from "../styles/generic-components";
import { PageTitle } from "../styles/generic-components";
import { NavIcons } from "../styles/generic-components";
import Left from "../assets/images/left.svg";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  return (
    <NewTasksProvider>
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
        <PageTitle>Create your news tasks.</PageTitle>
        <NewTask />
      </ContainPage>
    </NewTasksProvider>
  );
};

export default Create;
