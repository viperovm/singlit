import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBBtn,
    MDBInput, MDBView, MDBMask
} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';

const ContactPage = () => {
    return (
        <>

            <div
                    style={{
                        backgroundImage: 'url(' + process.env.REACT_APP_API_URL + '/media/photos/2020/10/22/construction3.jpg)',
                        height: '70vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <MDBMask overlay="black-slight"/>
                </div>
            <MDBContainer>
            <MDBCard
            style={{marginTop: '-100px'}}
            >
                <MDBRow>
                    <MDBCol lg='8'>
                        <MDBCardBody className='form'>
                            <h3 className='mt-4'>
                                <MDBIcon icon='envelope' className='pr-2'/>
                                Напишите нам:
                            </h3>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <div className='md-form mb-0'>
                                        <MDBInput
                                            type='text'
                                            id='form-contact-name'
                                            label='Ваше имя'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md='6'>
                                    <div className='md-form mb-0'>
                                        <MDBInput
                                            type='text'
                                            id='form-contact-email'
                                            label='Ваш email'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <div className='md-form mb-0'>
                                        <MDBInput
                                            type='text'
                                            id='form-contact-phone'
                                            label='Ваш телефон'
                                        />
                                    </div>
                                </MDBCol>
                                <MDBCol md='6'>
                                    <div className='md-form mb-0'>
                                        <MDBInput
                                            type='text'
                                            id='form-contact-company'
                                            label='Название организации'
                                        />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className='mb-4'>
                                <MDBCol md='12'>
                                    <div className='md-form mb-0'>
                                        <MDBInput
                                            type='textarea'
                                            id='form-contact-message'
                                            label='Сообщение'
                                        />
                                        <MDBBtn rounded color='blue' className='m-0' style={{padding: '23px 25px', position: 'absolute', right: '-10px', top: '0'}}>
                                            <MDBIcon icon='paper-plane'size='2x'/>
                                        </MDBBtn>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCol>
                    <MDBCol lg='4'>
                        <MDBCardBody className='contact text-center h-100 white-text' style={{ backgroundColor: '#3f51b5'}}>
                            <h3 className='my-4 pb-2'>Наши контакты</h3>
                            <ul className='text-lg-left list-unstyled ml-4'>
                                <li>
                                    <p>
                                        <MDBIcon icon='map-marker-alt' className='pr-2'/>
                                        Москва, Люсиновская, 12-23
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <MDBIcon icon='phone' className='pr-2'/>
                                        +7 499 322 88 51
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <MDBIcon icon='envelope' className='pr-2'/>
                                        contact@example.com
                                    </p>
                                </li>
                            </ul>
                            <hr className='hr-light my-4'/>
                            <ul className='list-inline text-center list-unstyled'>
                                <li className='list-inline-item'>
                                    <a href='#!' className='p-2 fa-lg w-ic'>
                                        <MDBIcon fab icon='twitter'/>
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#!' className='p-2 fa-lg w-ic'>
                                        <MDBIcon fab icon='linkedin'/>
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#!' className='p-2 fa-lg w-ic'>
                                        <MDBIcon fab icon='instagram'/>
                                    </a>
                                </li>
                            </ul>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </MDBContainer>
            </>
    );
};

export default ContactPage;
