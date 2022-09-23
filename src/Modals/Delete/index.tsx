import React, { FC, useState } from "react";
import Alert from "../../assets/images/alert.svg";
import GenericModal from "../Generic";
import { deleteTask } from "../../services/deleteTask";
import { deleteProps } from "./Delete.types";
import SuccessModal from "../Success";

const DeleteModal: FC<deleteProps> = ({ id = "", close, update }) => {
  const [isSuccessOpen, setIsuccessOpen] = useState(false);
  const [hasErro, setHasErro] = useState(false);

  const acept = async () => {
    const response = await deleteTask(id);
    if (response.id) {
      setIsuccessOpen(true);
      setTimeout(() => {
        update((prev) => !prev);
        setIsuccessOpen(false);
      }, 2000);
    } else {
      setHasErro(true);
    }
  };

  return (
    <>
      <GenericModal
        colorButton="red"
        button1="Cancel"
        button2="Delete"
        close={close}
        acept={acept}
        Text={
          hasErro
            ? "someThing was error, try again after"
            : "do you really want to delete this?"
        }
        Image={Alert}
      />
      {isSuccessOpen && <SuccessModal />}
    </>
  );
};

export default DeleteModal;
