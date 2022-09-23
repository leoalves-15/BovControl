import { Dispatch, SetStateAction } from "react";
import { task } from "../../types/Task.type";

export type ContextTaskProp = {
  setTasks: Dispatch<SetStateAction<task[]>>;
  createTasks: () => void;
  tasks: task[];
};
