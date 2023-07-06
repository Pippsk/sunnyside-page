import React from 'react'
import { Logo, StyledNav, Menu } from '../../Styled/StyledNav'
import Navlist from './Navlist'

const Nav = () => {
  return (
    <StyledNav>
        <Logo src='/images/logo.svg' style={{width:"150px"}}/>
        <Navlist/>
        <Menu src='/images/icon-hamburger.svg'style={{width:"40px"}}/>
    </StyledNav>
  )
}

export default Nav
