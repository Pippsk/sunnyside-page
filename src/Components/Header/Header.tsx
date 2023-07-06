import React from 'react'
import { StyledHeader } from '../../Styled/StyledHeader'
import Nav from '../Nav/Nav'
import GlobalStyle from '../../GlobalStyle/GlobalStyles'

const Header = () => {

  
  return (
    <>
    <GlobalStyle/>
    <StyledHeader>
      
      <Nav/>
      <p>We are creative</p>
      <div>
      <img src="/images/icon-arrow-down.svg" alt="" />
      </div>
    </StyledHeader>
    </>
  )
}

export default Header
