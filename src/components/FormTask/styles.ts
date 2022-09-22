import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  background: none;
  padding: 20px;
  margin-top: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.14);
  border-radius: 5px;
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
  padding-top: 30px;
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
  &:disabled {
    background: ${colors.blockedInput};
    cursor: not-allowed;
  }
`;

export const InputHalf = styled(InputFull)`
  width: 240px;
  max-width: 100%;
`;

export const Select = styled.select`
  margin-left: 20px;
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
  &:disabled {
    background: ${colors.blockedInput};
    cursor: not-allowed;
  }
`;

export const SaveButton = styled.button`
  width: 250px;
  height: 40px;
  max-width: 100%;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${colors.backgroundCard};
  background-color: ${colors.addColor};
`;
