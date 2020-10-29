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

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: {
                title: '',
                subtitle: '',
                content: '',
                img_alt: '',
                imageURL: '',
            }
        }
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/api/about/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({page: res[0]}))
            .catch(error => console.log(error))
    }

    render() {

        let content = this.state.page['content'].replace(/(?:\r\n|\r|\n)/g, '<br />')

        const page = this.state.page;


        return (
            <>
                <div
                    style={{
                        backgroundImage: 'url(' + process.env.REACT_APP_API_URL + page['imageURL'] + ')',
                        height: '70vh',
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
                                        <h1 className="text-center h1 pt-4">
                                            <strong>{page['title']}</strong>
                                        </h1>
                                        <div className="col-md-12 col-xl-12 d-flex justify-content-center my-5">
                                            <h5 className="dark-grey-text mb-1">
                                                {page['subtitle']}
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

export default About;
