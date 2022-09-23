import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormTask  from "./index";

export default {
  title: "Components/FormTask",
  component: FormTask,
} as ComponentMeta<typeof FormTask>;

export const Primary: ComponentStory<typeof FormTask> = () => <FormTask />;
