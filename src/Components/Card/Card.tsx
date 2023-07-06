import React from 'react'

import { Flex } from '../Flex/Flex'
import { StyledButton } from '../../Styled/StyledButton'
import { StyledText } from '../../Styled/StyledText'
import { StyledImage } from '../../Styled/StyledImage'


type CardProps = {
  item:{
  title:string
  text:string
  image:string
  bgColor:string
  id:number
  }
}

const Card = ({item:{id, title, text, image, bgColor}}:CardProps) => {
  return (
    <Flex layout={id % 2 === 0 ? 'row-reverse' : ''} >
        <StyledImage>
          <picture>
          <source media="(min-width:768px)" srcSet={`/images/desktop/${image}`}/>
          <img src={`/images/mobile/${image}`} />
          </picture>
        </StyledImage>

        <StyledText>
          <h1>{title}</h1>
          <p>{text}</p>
          <StyledButton bg={bgColor}>Learn More</StyledButton>
        </StyledText>

    </Flex>
  )
}

export default Card
