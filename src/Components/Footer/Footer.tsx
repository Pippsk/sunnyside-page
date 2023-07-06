import React from 'react'
import { StyledFooter } from '../../Styled/StyledFooter'

const Footer = () => {
  return (  
    <StyledFooter>
      <h1>sunnyside</h1>
      <div>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
      </div>

      <section>
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
      </section>
    </StyledFooter>
  )
}

export default Footer
