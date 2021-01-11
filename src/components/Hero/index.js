import React, { useState } from 'react';
import NavBar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElement';

function Here() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((currentValue) => (
      !currentValue
    ))
  }
  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>역사상 가장 위대한 피자</HeroH1>
          <HeroP>60초안에 만들어준다</HeroP>
          <HeroBtn>주문</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Here;
