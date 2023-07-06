import styled from "styled-components"

export const StyledHeader = styled.div`
    background-image: url('/images/mobile/image-header.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 600px;

    p{
        font-size: 3rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-family: 'Fraunces', serif;
        font-weight: 900;
        color: white;
        text-align: center;
        margin-top: 60px;
    }

    div{
        margin-top: 70px;
        display: flex;
        justify-content: center;
    }

    @media (min-width:${({theme})=> theme.mobile}) {
        background-image: url('/images/desktop/image-header.jpg');
    }
   
`





