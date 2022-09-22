import { Dispatch, SetStateAction } from "react";

export type DeleteProps = {
  id: string;
  close: Dispatch<SetStateAction<boolean>>;
  update: Dispatch<SetStateAction<boolean>>;
};
