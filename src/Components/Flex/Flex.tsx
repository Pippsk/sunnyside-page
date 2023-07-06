import styled from 'styled-components'

type FlexProps = {
    layout?:string
}

export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction:${({layout}) => layout || 'row'};
    align-items: center;
    

    @media(max-width:${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`