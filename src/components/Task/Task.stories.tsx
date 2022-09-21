import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Task } from ".";

export default {
  title: "Components/Task",
  component: Task,
} as ComponentMeta<typeof Task>;

export const Primary: ComponentStory<typeof Task> = () => (
  <Task
    farmerName="Leo Alves"
    city="Barreiras"
    farmName="Fazenda Futuro"
    createDate="2022-08-27T17:30:08.380Z"
  />
);
