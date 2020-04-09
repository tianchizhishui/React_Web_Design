import React, { Component } from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style';

class Header extends Component {
  render() {
    return ( 
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>Main Page</NavItem>
          <NavItem className='left'>Download App</NavItem>
          <NavItem className='right'>Login</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavSearch></NavSearch>
        </Nav>
        <Addition>
          <Button className='writting'>Write Something</Button>
          <Button className='reg'>Register</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header;