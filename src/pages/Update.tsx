import React, { useState } from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";
import { useCurrentTask } from "../hooks/use-current-task";
import { useNavigate } from "react-router-dom";
import { NavIcons } from "../styles/generic-components";
import Left from "../assets/images/left.svg";
import { updateTask } from "../services/updateTask";
import { task } from "../types/Task.type";
import Spinner from "../components/Spinner";
import SuccessModal from "../Modals/Success";

const Update = () => {
  const { currentTask } = useCurrentTask();
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const navigate = useNavigate();

  const update = (e: any, data: task) => {
    e.preventDefault();
    let id = currentTask?.id ? currentTask?.id : "-1";
    updateTask(data, id);
    setIsOpenSuccess(true);
    setTimeout(() => {
      setIsOpenSuccess(false);
    }, 2000);
  };

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
      <PageTitle>
        {currentTask?.farmer?.name
          ? `Task: ${currentTask?.farmer?.name}`
          : "Sorry! we can't find your task"}
      </PageTitle>
      {currentTask?.farmer?.name ? (
        <FormTask
          task={currentTask}
          disabled={false}
          send={update}
          textButton="Update"
        />
      ) : (
        <Spinner />
      )}
      {isOpenSuccess && <SuccessModal />}
    </ContainPage>
  );
};

export default Update;
