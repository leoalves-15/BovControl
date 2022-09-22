import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  background: ${colors.backgroundCard};
  border-radius: 12px;
`;

export const ModalText = styled.p`
  padding: 20px;
`;

export const ContainButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ModalButton = styled.button`
  width: 150px;
  height: 40px;
  max-width: 100%;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${colors.backgroundCard};
  background-color: ${(props) => (props.color === "red" ? colors.delete : colors.subtitlePage)};
`;
