import styled,  { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
border-style, html {
    width: 100vw;
    height: 100vh;
}
`

export const Container = styled.div`
    max-width: 1600px;
    width: 100%;
    height: 2400px;
    padding: 1.5rem 1rem;
    /* background: black; */

`