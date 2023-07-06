
import styled from 'styled-components'

export const StyledImage = styled.div`
        width:50% ;
    img{
        width: 100%;
        display: block;
    }
    @media(max-width:${({theme}) => theme.mobile}){
         width:100% ;
    }
`


