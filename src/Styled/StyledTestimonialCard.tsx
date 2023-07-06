import styled from 'styled-components'

export const StyledTestimCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    

    img{
        width: 50px;
        border-radius: 50%;
        margin-bottom: 50px;
    }

    p{
        line-height: 1.5;
        margin-bottom: 50px;
    }

    h1{
        font-family: 'Fraunces', serif;
        font-size: 14px;
        margin-bottom: 10px;
        font-weight: 900;
    }

    span{
        font-size: 12px;
        color: grey;
    }

    @media (max-width:${({theme})=> theme.mobile}) {
        margin-bottom: 50px;
        p{
            margin-bottom: 40px;
        }
    }
`