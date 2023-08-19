import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import testimonialsImg1 from '../assets/images/image-emily.jpg'
import testimonialsImg2 from '../assets/images/image-jennie.jpg'
import testimonialsImg3 from '../assets/images/image-thomas.jpg'
import img1 from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import img2 from '../assets/images/desktop/image-gallery-orange.jpg'
import img3 from '../assets/images/desktop/image-gallery-cone.jpg'
import img4 from '../assets/images/desktop/image-gallery-sugarcubes.jpg'


const Testimonials = () => {
    return (
        <>
            <Container fluid className='py-5 px-lg-5'>
                <h2 className='text-center fraunces text-uppercase my-5 text-muted fs-3' style={{ letterSpacing: 5 }}>Client Testimonials</h2>
                <Row className='p-lg-5' >
                    <Col md={4} className='text-center px-lg-5 mb-5' >
                        <figure className='testimonialsImg w-50 mx-auto'>
                            <img className='rounded-circle img-fluid' src={testimonialsImg1} alt="" />
                        </figure>
                        <p className='fs-4 my-5 text-muted barlow'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

                        <h4 className='fraunces' >Emily R.</h4>
                        <p className='barlow text-muted'>Marketing Director</p>
                    </Col>
                    <Col md={4} className='text-center px-lg-5  mb-5' >
                        <figure className='testimonialsImg w-50 mx-auto'>
                            <img className='rounded-circle img-fluid' src={testimonialsImg2} alt="" />
                        </figure>
                        <p className='fs-4 my-5 text-muted barlow'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                        <h4 className='fraunces' >Thomas S</h4>
                        <p className='barlow text-muted'>Chief Operating Officer</p>
                    </Col>
                    <Col md={4} className='text-center px-lg-5 ' >
                        <figure className='testimonialsImg w-50 mx-auto'>
                            <img className='rounded-circle img-fluid' src={testimonialsImg3} alt="" />
                        </figure>
                        <p className='fs-4 my-5 text-muted barlow'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                        <h4 className='fraunces' >Jenny F.</h4>
                        <p className='barlow text-muted'>Business Owner</p>
                    </Col>
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col xs={6} lg={3} className='p-0'>
                        <figure className='gallery'>
                            <img className='img-fluid' src={img1} alt="" />
                        </figure>
                    </Col>
                    <Col xs={6} lg={3} className='p-0'>
                        <figure className='gallery'>
                            <img className='img-fluid' src={img2} alt="" />
                        </figure>
                    </Col>
                    <Col xs={6} lg={3} className='p-0'>
                        <figure className='gallery'>
                            <img className='img-fluid' src={img3} alt="" />
                        </figure>
                    </Col>
                    <Col xs={6} lg={3} className='p-0'>
                        <figure className='gallery'>
                            <img className='img-fluid' src={img4} alt="" />
                        </figure>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Testimonials