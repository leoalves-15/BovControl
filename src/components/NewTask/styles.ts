import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 1000px;
  border: none;
  background: none;
`;

export const AddButon = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 20px 0;
  color: ${colors.backgroundCard};
  border-radius: 20px;
  background: ${colors.success};
`;
