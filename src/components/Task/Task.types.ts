import { Dispatch, SetStateAction } from "react";

export type TaskProps = {
  id: string;
  farmerName: string;
  city: string;
  farmName: string;
  createDate: string;
  setRender?: Dispatch<SetStateAction<boolean>>;
};
