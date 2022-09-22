import styled from "styled-components";
import { colors } from "../colors/colors";

export const PageTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  margin: 50px;
  weight: 700;
  color: ${colors.titlePage};
`;

export const ContainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;