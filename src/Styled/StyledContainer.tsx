import styled from "styled-components"

export const Container = styled.div`
    padding: 100px;
    text-align: center;

    h1{
        color: #878484;
        font-family: 'Fraunces', serif;
        margin-bottom: 30px;
        font-size: 1rem;
        letter-spacing: 2px;
    }

    @media (max-width:${({theme})=> theme.mobile}) {
        padding: 30px;
    }
`