import React from "react";
import Plus from "../../assets/images/plus.svg";
import { Container, AddTaskText } from "./styles";
import { useNavigate } from "react-router-dom";

export const AddTask = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => {navigate("Create")}}>
      <img src={Plus} alt="Add Task" />
      <AddTaskText>Add new task</AddTaskText>
    </Container>
  );
};
