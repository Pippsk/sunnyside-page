import styled from 'styled-components'

export const StyledText = styled.div`
    text-align: center;
    width: 50%;
    h1{
        margin-bottom: 20px;
        padding: 0 50px;
    }

    p{
        margin-bottom: 30px;
        font-size: 0.75rem;
        font-family: 'Barlow', sans-serif;
        line-height: 1.8;
        color:hsl(210, 4%, 67%) ;
        font-weight: 700;
        padding: 0 50px;
    }

    @media(max-width:${({theme}) => theme.mobile}){
        margin: 50px 0;
        text-align: center;
    }
`


