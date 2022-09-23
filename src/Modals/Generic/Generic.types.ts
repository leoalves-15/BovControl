import { Dispatch, SetStateAction } from "react";

export type GenericProps = {
  colorButton?: string;
  close?: Dispatch<SetStateAction<boolean>>;
  Image?: string;
  Text?: string;
  acept?: () => void;
  button1?: string;
  button2?: string;
};
