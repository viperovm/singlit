import React, {Component} from 'react';
import {
    MDBEdgeHeader,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBJumbotron,
    MDBIcon,
    MDBAnimation,
    MDBCard,
    MDBCardBody,
    MDBMask,
    MDBView,
    MDBBtn
} from 'mdbreact';
import MenuLink from '../components/menuLink';

class ServicePage extends Component{

    constructor(props) {
    super(props);
    }

    render() {

        const service = this.props.service
        console.log(service)
        let content = this.props.service['content'].replace(/(?:\r\n|\r|\n)/g, '<br />')
        return (

            <>
                <div
                    style={{
                        backgroundImage: 'url(' + service['img'] + ')',
                        height: '80vh',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <MDBMask overlay="black-slight"/>
                </div>
                <MDBContainer fluid className='mb-5'>
                    <MDBRow
                        style={{marginTop: '-100px'}}
                    >
                        <MDBCol md='12' className='px-lg-5'>
                            <MDBCard className='pb-5 mx-md-3'>
                                <MDBCardBody>
                                    <MDBContainer>
                                        <h1 className="text-center h1 pt-4 mb-3">
                                            <strong>{service['title']}</strong>
                                        </h1>
                                        <div className="col-md-12 col-xl-12 d-flex justify-content-center my-5">
                                            <h5 className="dark-grey-text mb-1">
                                                {service['subtitle']}
                                            </h5>
                                        </div>
                                        <p className="dark-grey-text mx-auto mb-5"
                                           dangerouslySetInnerHTML={{__html: content}}
                                        />
                                    </MDBContainer>

                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        );
    }
}

export default ServicePage;
