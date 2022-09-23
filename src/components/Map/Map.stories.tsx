import { ComponentStory, ComponentMeta } from "@storybook/react";
import Map from "./index";

export default {
  title: "Components/Map",
  component: Map,
} as ComponentMeta<typeof Map>;

export const Primary: ComponentStory<typeof Map> = () => (
  <Map center={{ lat: 0, lng: 0 }} />
);
