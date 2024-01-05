import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --bg: #000000;
        --text: #fff;
        --bg-footer:#8655ff ;
        --text-footer: #04040470 ;
        --decoration: #46b5be;
        --grey: #0404046b;
        --text-grey: #c4c1c6b8;
        --text-title2: #dad4ff;
        --purple-50: #f5f2ff;
        --purple-100: #ece8ff;
        --purple-200: #dad4ff;
        --purple-300: #c1b1ff;
        --purple-400: #a285ff;
        --purple-500: #8655ff;
        --purple-600: #7630f7;
        --purple-700: #681ee3;
        --purple-800: #5618bf;
        --purple-900: #48169c;
        --purple-950: #2b0b6a;


        
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        list-style-type: none;
    }

    html {
        scroll-behavior: smooth;
        scroll-padding-top: 70px;
    }


    body {
        margin: 0;
        padding: 0;
        background-color: var(--bg);
        font-family: 'Montserrat', sans-serif;
        color: white;
        overflow-x:hidden;
    }

    a {
        text-decoration: none;
        color: var(--text);
    }
    a:visited {
        color: white;
    }
    li {
        list-style: none;
    }

`;