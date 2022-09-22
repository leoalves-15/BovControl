import React from "react";
import { ContainPage, PageTitle } from "../styles/generic-components";
import FormTask from "../components/FormTask";
import { useCurrentTask } from "../hooks/use-current-task";
import { useNavigate } from "react-router-dom";
import { NavIcons } from "../styles/generic-components";
import Left from "../assets/images/left.svg";
import { updateTask } from "../services/updateTask";

const Update = () => {
  const { currentTask } = useCurrentTask();
  const navigate = useNavigate();

  const update = (e: any) => {
    e.preventDefault();
    const elements = e.target.elements;

    const data = {
      type: elements.type.value,
      amount_of_milk_produced: parseInt(elements.amount_of_milk_produced.value),
      number_of_cows_head: parseInt(elements.number_of_cows_head.value),
      had_supervision: elements.had_supervision.value === 'true' ? true : false,
      farmer: {
        name: elements.farm_name.value,
        city: elements.city.value,
      },
      from: {
        name: elements.farmer_name.value,
      },
      to: {
        name: elements.supervision_name.value,
      },
      location: {
        latitude: -23.5,
        longitude: -46.6,
      },
      created_at: "2022-02-01T10:10:21.748Z",
      updated_at: "2022-02-01T10:10:21.748Z",
    };
    console.log(currentTask?.id)
    let id = currentTask?.id ? currentTask?.id : -1;
    updateTask(data, id);
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
      {currentTask?.farmer?.name && (
        <FormTask
          task={currentTask}
          disabled={false}
          send={update}
          textButton="Update"
        />
      )}
    </ContainPage>
  );
};

export default Update;
