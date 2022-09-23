import { createGlobalStyle } from "styled-components";
import { colors } from "../colors/colors";

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,300;1,700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap');
       margin: 0 auto;
   }
   body {
    background-color: ${colors.backgroundPage};
   }
   .leaflet-container{
        width: 100%;
        height: 100%;
    }
`;
export default GlobalStyle;
