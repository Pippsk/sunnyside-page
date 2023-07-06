import styled from "styled-components"

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    background-color:${({theme}) => theme.colors.DarkModerateCyan} ;

    h1{
        color:${({theme}) => theme.colors.DarkCyan} ;
        font-size: 2rem;
        font-family: 'Barlow', sans-serif;
        font-weight: 900;
        margin-bottom: 40px;
    }

    div,
    section{
        display: flex;
    }

    div{
        gap: 40px;
        margin-bottom: 50px;
    }

    a{
        text-decoration: none;
        font-size: 12px;
        color: ${({theme}) => theme.colors.DarkCyan};
    }

    section{
        gap:20px;

        img{
            cursor: pointer;
            width: 15px;
        }
    }
`