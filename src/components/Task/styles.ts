import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${colors.backgroundCard};
  max-width: 100%;
  width: 1000px;
  height: 100px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 8px;
  -webkit-box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 8px 16px 8px rgba(0, 0, 0, 0.14);
`;

export const FarmerName = styled.h2`
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${colors.titleCard};
`;

export const Infos = styled(FarmerName)`
  font-size: 12px;
  color: ${colors.subtitlePage};
`;

export const CreateDate = styled(Infos)`
  font-size: 12px;
`;

export const TaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  cursor: pointer;
`;

export const NavIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  img {
    padding: 5px;
    cursor: pointer;
  }
`;
