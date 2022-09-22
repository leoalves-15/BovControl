import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  border: none;
  background: none;
  cursor: pointer;
  justify-content: space-between;
`;

export const InputFull = styled.input`
  max-width: 100%;
  width: 1000px;
  height: 40px;
  padding: 0 10px;
  outline: none;
  box-shadow: none;
  background: ${colors.backgroundCard};
  border: 1px solid ${colors.subtitlePage};
  box-sizing: border-box;
  border-radius: 5px;
  color: ${colors.titlePage};
  font-size: 14px;
`;

export const InputHalf = styled(InputFull)`
  width: 240px;
  max-width: 100%;
`;

export const Select = styled.select`
  width: 240px;
  max-width: 100%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  box-shadow: none;
  background: ${colors.backgroundCard};
  border: 1px solid ${colors.subtitlePage};
  box-sizing: border-box;
  border-radius: 5px;
  color: ${colors.titlePage};
  font-size: 14px;
`;
