import styled from 'styled-components'

type ButtonProps = {
    bg:string
    children?:string
}

export const StyledButton = styled.button<ButtonProps>`
    padding: 10px 30px;
    background-color: ${({bg}) =>bg};
    border: none;
    border-radius: 50px;
`