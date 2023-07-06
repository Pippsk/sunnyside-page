import React from 'react'
import { StyledTestimCard } from '../../Styled/StyledTestimonialCard'

type TestimProps = {
    testimonials:{
        avatar?:string
        text?:string
        name?:string
        position?:string
        id:number
    }
}

const TestimCard = ({testimonials:{avatar, text, name, position, id}}:TestimProps) => {
  return (
    <StyledTestimCard>

       <img src={`/images/${avatar}`}alt="" /> 
       <p>{text}</p>
       <h1 style={{color:"black"}}>{name}</h1>
       <span>{position}</span>
    </StyledTestimCard>
  )
}

export default TestimCard
