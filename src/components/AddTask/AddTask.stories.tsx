import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AddTask } from ".";

export default {
  title: "Components/AddTask",
  component: AddTask,
} as ComponentMeta<typeof AddTask>;

export const Primary: ComponentStory<typeof AddTask> = () => <AddTask />;
