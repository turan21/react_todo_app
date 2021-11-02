import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 80vw;
    max-width: 100%;
    height: 90vh;
    margin: 20px auto;
    border-radius: 30px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    text-align: start;
    transition: all 0.25s ease-in-out;
    @media (max-width: 750px) {
        height: auto;
    }
`
