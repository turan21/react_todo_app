import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    width: 80vw;
    max-width: 100%;
    height: 90vh;
    margin: 20px auto;
    border-radius: 30px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    grid-template-rows: 0.3fr 0.3fr 0.3fr 0.1fr;
    grid-template-columns: 0.07fr 0.2fr 0.73fr;
    grid-template-areas:
        "tabbar tags appbar appbar"
        "tabbar tags planning planning"
        "tabbar tags design design"
        "tabbar tags footer footer";
    text-align: start;
    /* grid-gap: 0.25rem; */
    transition: all 0.25s ease-in-out;
    @media (max-width: 750px) {
        height: auto;
        grid-template-columns: 1fr;
        grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
        grid-template-areas:
        "tabbar"
        "tags"
        "appbar"
        "planning"
        "design"
        "footer";
    }
`
