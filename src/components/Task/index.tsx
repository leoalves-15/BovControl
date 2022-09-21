import React, { FC } from "react";
import { Container, FarmerName, Infos, CreateDate } from "./styles";
import { TaskProps } from "./Task.types";

const Task: FC<TaskProps> = ({ farmerName, city, farmName, createDate }) => (
  <Container>
    <FarmerName>
        {farmerName}
    </FarmerName>
    <Infos>
        {farmName} | {city}
    </Infos>
    <CreateDate>
        {createDate}
    </CreateDate>
  </Container>
);

export default Task;
