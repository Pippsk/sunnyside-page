import styled from 'styled-components'

export const StyledNavList = styled.ul`
    
    display: none;

    li{
        list-style-type: none;
        color: white;
        font-family:'Fraunces', serif; 
        cursor: pointer;
    &:hover{
        padding: 10px 20px;
        background-color: white;
        color: black;
        border-radius: 50px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.7rem;
        box-sizing: border-box;
    }

    
}
@media (min-width:${({theme}) => theme.mobile}){
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    padding: 0;
    }

`