import { ComponentStory, ComponentMeta } from "@storybook/react";
import NewTask  from "./index";

export default {
  title: "Components/NewTask",
  component: NewTask,
} as ComponentMeta<typeof NewTask>;

export const Primary: ComponentStory<typeof NewTask> = () => <NewTask />;
