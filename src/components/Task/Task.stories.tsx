import { ComponentStory, ComponentMeta } from '@storybook/react';
import Task from '.';

export default {
  title: 'Components/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

export const Primary: ComponentStory<typeof Task> = () => (
  <Task />
);
