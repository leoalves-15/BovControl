import { Dispatch, SetStateAction } from "react";

export type center = {
  lat: number;
  lng: number;
};

export type mapProps = {
  center: center;
  setNewPosition?: Dispatch<SetStateAction<center>>;
};
