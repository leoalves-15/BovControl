import React, { FC } from "react";
import { Container, FarmerName, Infos, CreateDate, TaskColumn } from "./styles";
import { NavIcons } from "../../styles/generic-components";
import { TaskProps } from "./Task.types";
import Trash from "../../assets/images/trash.svg";
import Pencil from "../../assets/images/pencil.svg";
import { useNavigate } from "react-router-dom";

export const Task: FC<TaskProps> = ({
  id,
  farmerName,
  city,
  farmName,
  createDate,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <TaskColumn
        onClick={() => {
          navigate(`Task?id=${id}`);
        }}
      >
        <FarmerName>{farmerName}</FarmerName>
        <Infos>
          {farmName} | {city}
        </Infos>
        <CreateDate>{createDate}</CreateDate>
      </TaskColumn>
      <TaskColumn>
        <NavIcons>
          <img src={Trash} alt="Delete" />
          <img
            src={Pencil}
            alt="Update"
            onClick={() => {
              navigate("Update");
            }}
          />
        </NavIcons>
      </TaskColumn>
    </Container>
  );
};
