import styled from "styled-components"

export const Grid = styled.div`

    display: grid;
    grid-template-columns:repeat(4, 1fr);

    img{
        width: 100%;
    }

    @media (max-width:${({theme})=> theme.mobile}) {
        grid-template-columns:1fr 1fr;
    }
`