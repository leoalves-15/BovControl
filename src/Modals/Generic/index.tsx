import React, { FC } from "react";
import {
  Overlay,
  Modal,
  ContainButtons,
  ModalButton,
  ModalText,
} from "./style";
import { GenericProps } from "./Generic.types";

const GenericModal: FC<GenericProps> = ({
  close = () => {},
  acept = () => {},
  Image,
  colorButton,
  Text,
  button1,
  button2,
}) => {
  return (
    <Overlay>
      <Modal>
        <img src={Image} alt="Alert" />
        <ModalText>{Text}</ModalText>
        <ContainButtons>
          {button1 && (
            <ModalButton
              onClick={() => {
                close((prev) => !prev);
              }}
            >
              {button1}
            </ModalButton>
          )}
          {button2 && (
            <ModalButton
              color={colorButton}
              onClick={async () => {
                acept();
              }}
            >
              {button2}
            </ModalButton>
          )}
        </ContainButtons>
      </Modal>
    </Overlay>
  );
};

export default GenericModal;
