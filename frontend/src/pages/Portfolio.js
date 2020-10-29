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
                                <MDBCardBody className="text-center">
                                    <MDBContainer>
                                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                                            Recent posts
                                        </h2>
                                        <p className="text-center w-responsive mx-auto mb-5">
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                            anim id est laborum.
                                        </p>
                                        <MDBRow>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                                                        alt=""
                                                    />
                                                    <MDBMask overlay="white-slight"/>
                                                </MDBView>

                                                <h4 className="font-weight-bold mb-3">
                                                    <strong>Title of the news</strong>
                                                </h4>
                                                <p className="dark-grey-text">
                                                    Nam libero tempore, cum soluta nobis est eligendi optio
                                                    cumque
                                                    nihil impedit quo minus id quod maxime placeat facere
                                                    possimus
                                                    voluptas.
                                                </p>
                                                <MDBBtn color="primary" rounded size="md">
                                                    Read more
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                                        alt=""
                                                    />
                                                    <MDBMask overlay="white-slight"/>
                                                </MDBView>

                                                <h4 className="font-weight-bold mb-3">
                                                    <strong>Title of the news</strong>
                                                </h4>
                                                <p className="dark-grey-text">
                                                    Nam libero tempore, cum soluta nobis est eligendi optio
                                                    cumque
                                                    nihil impedit quo minus id quod maxime placeat facere
                                                    possimus
                                                    voluptas.
                                                </p>
                                                <MDBBtn color="primary" rounded size="md">
                                                    Read more
                                                </MDBBtn>
                                            </MDBCol>
                                            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
                                                <MDBView hover className="rounded z-depth-2 mb-4" waves>
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                                                        alt=""
                                                    />
                                                    <MDBMask overlay="white-slight"/>
                                                </MDBView>

                                                <h4 className="font-weight-bold mb-3">
                                                    <strong>Title of the news</strong>
                                                </h4>
                                                <p className="dark-grey-text">
                                                    Nam libero tempore, cum soluta nobis est eligendi optio
                                                    cumque
                                                    nihil impedit quo minus id quod maxime placeat facere
                                                    possimus
                                                    voluptas.
                                                </p>
                                                <MDBBtn color="primary" rounded size="md">
                                                    Read more
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
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
