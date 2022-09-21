import styled from "styled-components";
import { colors } from "../../colors/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${colors.backgroundCard};
`;

export const FarmerName = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 16px;
`;

export const Infos = styled(FarmerName)`
    font-size: 12px;
`;

export const CreateDate = styled(FarmerName)`
    font-size: 12px;
`;