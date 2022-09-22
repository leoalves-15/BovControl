import React, { FC } from "react";
import {
  Overlay,
  Modal,
  ContainButtons,
  ModalButton,
  ModalText,
} from "./style";
import Alert from "../../assets/images/alert.svg";
import { DeleteProps } from "./Delete.types";
import { deleteTask } from "../../services/deleteTask";

const DeleteModal: FC<DeleteProps> = ({ id, close, update }) => {

  return (
    <Overlay>
      <Modal>
        <img src={Alert} alt="Alert" />
        <ModalText>do you really want to delete this?</ModalText>
        <ContainButtons>
          <ModalButton
            onClick={() => {
              close((prev) => !prev);
            }}
          >
            Cancel
          </ModalButton>
          <ModalButton
            color="red"
            onClick={async () => {
              await deleteTask(id);
              close((prev) => !prev);
              update((prev) => !prev);
            }}
          >
            Delete
          </ModalButton>
        </ContainButtons>
      </Modal>
    </Overlay>
  );
};

export default DeleteModal;
