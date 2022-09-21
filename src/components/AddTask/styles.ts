import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.button`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const AddTaskText = styled.p`
  margin-left: 10px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  color: ${colors.addColor}
`;