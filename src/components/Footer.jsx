import React from 'react'
import { Container } from 'react-bootstrap'

import instagram from '../assets/images/icon-instagram.svg'
import facebook from '../assets/images/icon-facebook.svg'
import twitter from '../assets/images/icon-twitter.svg'
import pinterest from '../assets/images/icon-pinterest.svg'

const Footer = () => {
    return (
        <Container fluid className='p-0'>
            <footer>
                <div>
                    <h4 className='py-5 display-4 fw-bolder text-center'>sunnyside</h4>
                    <div className='mt-3 barlow mx-auto d-flex flex-row align-items-center justify-content-center fs-4 fw-semibold gap-5'>
                        <p>About</p>
                        <p>Services</p>
                        <p>Projects</p>
                    </div>
                    <div className='mt-5 py-5 barlow mx-auto d-flex flex-row align-items-center justify-content-center fs-4 fw-semibold gap-5'>
                        <img  src={facebook} alt="" />
                        <img  src={instagram} alt="" />
                        <img  src={twitter} alt="" />
                        <img  src={pinterest} alt="" />
                    </div>
                </div>
            </footer>

        </Container>
    )
}

export default Footer