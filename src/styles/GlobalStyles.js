import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        /* --bg: #090b0e; */
        --bg: #030712;
        --bg-2: #fef2ff;
        --bg-card:#1F2937;
        --bg-footer: #1F2937;
        --bg-footer-bottom: #394659;
        --bg-btn: #4c5a6d;
        --bg-btn-hover: #7a8ba1;

        --bg-btn-category: #4c5a6d;
        --bg-btn-category-selected: #697079;

        --bg-modal: #181f29;

        --nav-hover: #7a8ba1;

        --text-contrast: #b7c9e1;
        
        --text: #fff;
        --gray: #707070;
        --text-footer: #98b1d5 ;
        --text: white;
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



        --gray-50: #f6f6f6;
        --gray-100: #e7e7e7;
        --gray-200: #d1d1d1;
        --gray-300: #b0b0b0;
        --gray-400: #8f8f8f;
        --gray-500: #6d6d6d;
        --gray-600: #5d5d5d;
        --gray-700: #4f4f4f;
        --gray-800: #454545;
        --gray-900: #3d3d3d;
        --gray-950: #262626;

        
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
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