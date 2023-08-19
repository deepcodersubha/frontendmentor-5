import React from 'react'
import headerImg from '../assets/images/desktop/image-header.jpg'
import headerImg2 from '../assets/images/mobile/image-header.jpg'
import arrow from '../assets/images/icon-arrow-down.svg'



const Header = () => {
  return (
    <>

      <header>
        <h1 className='text-center display-2 fw-bold text-white fraunces text-uppercase'>We are creatives</h1>
        <img src={arrow} alt="arrow" />
        <figure className='headerImg d-lg-block d-none'>
          <img src={headerImg} alt="" />
        </figure>
        <figure className='headerImg d-lg-none d-block'>
          <img src={headerImg2} alt="" />
        </figure>
      </header>
    </>
  )
}

export default Header