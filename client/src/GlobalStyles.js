import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./fonts/Poppins-Regular.ttf";
import PoppinsBold from "./fonts/Poppins-Bold.ttf";
import PoppinsSemiBold from "./fonts/Poppins-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('truetype');
    }
    @font-face {
        font-family: 'Poppins Bold';
        src: url(${PoppinsBold}) format('truetype');
    }
    @font-face {
        font-family: 'Poppins Semi Bold';
        src: url(${PoppinsSemiBold}) format('truetype');
    }
    :root {
        --primary-color: #FFFFFF;
        --accent-primary-color: #145DA0;
        --accent-secondary-color: #B1D4E0;
        --accent-text-color: #051D40;
        --heading-font-family: 'Poppins Bold';
        --heading-secondary-font-family: 'Poppins Semi Bold';
        --body-font-family: 'Poppins';
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button, link, input, textarea {
        margin: 0;
        padding: 0;
        border: 0;
        position:relative;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
        font-family: var(--body-font-family);
        transition-duration: .3s;
         @media screen and (max-width: 1024px ) {
    font-size: 16px !important;
  }
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        height: 100vh;
    }
    ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    h2, h3, h4, h6 {
        font-weight: bolder;
        font-family: var(--heading-secondary-font-family);
        color: var(--accent-primary-color);
    }
    p, button, a {
        color: var(--accent-primary-color);
        font-size: 16px;
    }
    h2 {
        font-size: 28px;
    }
    h1 {
        font-size: 50px;
        font-family: var(--heading-font-family);
        color: var(--accent-primary-color);
    }
    button {
        text-transform: capitalize;
        color: white;
        border-radius: 5px;
        padding: 18px 40px 18px 40px;
        background-color: var(--accent-primary-color);
        &:hover {
            background-color: var(--accent-secondary-color);
            color: var(--accent-text-color);
            cursor: pointer;
        }
        @media screen and (max-width: 1024px ) {
    padding: 5px 15px;
  }
    }
    input, select, option {
        font-family: var(--body-font-family) ;
        font-weight: 16px;
        padding: 5px 50px;
        background-color: #eee;
        border-radius: 5px;
        outline: none;

        &:focus {
            /* border: 2px solid var(--accent-secondary-color); */
        }
    }
    option {
        font-family: 'Helvetica', 'Arial', sans-serif;
        &:focus {
            font-style: italic;
        }
    }

`;
