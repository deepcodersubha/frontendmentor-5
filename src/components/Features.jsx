import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import transformImg from '../assets/images/desktop/image-transform.jpg'
import standout from '../assets/images/desktop/image-stand-out.jpg'
import design from '../assets/images/desktop/image-graphic-design.jpg'
import photography from '../assets/images/desktop/image-photography.jpg'

const Features = () => {
    return (
        <Container fluid>
            <Row className='d-flex flex-lg-row flex-column-reverse  align-items-center ' >
                <Col md={6} className='p-0 '>
                    <div className='features mx-auto text-center text-lg-start'>
                        <h2 className='fraunces display-2 '>Transform your brand</h2>
                        <p className='my-5 barlow fs-5 text-muted ' >We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
                        <Button className='bg-transparent border-0 text-dark fraunces fs-4 underline-button'>Learn More</Button>
                    </div>
                </Col>
                <Col md={6} className='p-0'>
                    <img src={transformImg} alt="" />
                </Col>
            </Row>

            <Row className='align-items-center ' >
                <Col md={6} className='p-0'>
                    <img src={standout} alt="" />
                </Col>
                <Col md={6} className='p-0 '>
                <div className='features mx-auto text-center text-lg-start'>
                        <h2 className='fraunces display-2'>Stand out to the right audience</h2>
                        <p className='my-5 barlow fs-5 text-muted' >Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                        <Button className='bg-transparent border-0 text-dark fraunces fs-4 underline-button'>Learn More</Button>
                    </div>
                </Col>
            </Row>

            <Row className='align-items-center ' >
                <Col md={6} className='p-0 position-relative'>
                    <img src={design} alt="" />
                    <div className='wrapperForTwo p-lg-5 py-5 text-center fw-semibold' style={{ left: "15%", fontSize: "18px", color: "hsl(167, 40%, 24%)" }} >
                        <h2 className='fraunces mb-lg-4 mb-2 mt-5' style={{ color: "hsl(167, 40%, 24%)" }}>Graphic Design</h2>
                        <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                    </div>
                </Col>
                <Col md={6} className='p-0 position-relative'>
                    <img src={photography} alt="" />
                    <div className='wrapperForTwo p-lg-5 py-5 text-center fw-semibold' style={{ left: "15%", fontSize: "18px", color: "hsl(167, 40%, 24%)" }} >
                        <h2 className='fraunces mb-lg-4 mb-2 mt-5' >Photography</h2>
                        <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image</p>
                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default Features