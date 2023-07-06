import styled from 'styled-components'

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`

export const Logo = styled.img`
   
`

export const Menu = styled.img`
    cursor: pointer;
    @media (min-width:${({theme}) => theme.mobile}){
    display: none;
    }
`