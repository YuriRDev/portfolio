import { createGlobalStyle } from "styled-components";
import COLORS from "./colors";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    transition: background-color .5s;
}
body {
    background: ${COLORS.dark.bg};
    font-family: Montserrat;
    scroll-behavior: smooth;
    color: ${COLORS.dark.white};
}
::-webkit-scrollbar{
    width: 0px;
}
`;
