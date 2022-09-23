import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from "./index";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Primary: ComponentStory<typeof Spinner> = () => (
  <Spinner />
);
