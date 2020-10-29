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

class News extends Component {

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
                                            <MDBCol lg="5" xl="4">
                                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                                        alt=""
                                                    />
                                                    <a href="#!">
                                                        <MDBMask overlay="white-slight"/>
                                                    </a>
                                                </MDBView>
                                            </MDBCol>
                                            <MDBCol lg="7" xl="8">
                                                <h3 className="font-weight-bold mb-3 p-0">
                                                    <strong>Title of the news</strong>
                                                </h3>
                                                <p className="dark-grey-text">
                                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                                    nihil impedit quo minus id quod maxime placeat facere possimus,
                                                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                                                    officiis debitis cum soluta nobis est eligendi placeat facere
                                                    aut rerum.
                                                </p>
                                                <p>
                                                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>,
                                                    19/04/2018
                                                </p>
                                                <MDBBtn color="primary" size="md">
                                                    Read More
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr className="my-5"/>
                                        <MDBRow>
                                            <MDBCol lg="5" xl="4">
                                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg"
                                                        alt=""
                                                    />
                                                    <a href="#!">
                                                        <MDBMask overlay="white-slight"/>
                                                    </a>
                                                </MDBView>
                                            </MDBCol>
                                            <MDBCol lg="7" xl="8">
                                                <h3 className="font-weight-bold mb-3 p-0">
                                                    <strong>Title of the news</strong>
                                                </h3>
                                                <p className="dark-grey-text">
                                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                                                    dolores et quas molestias excepturi sint occaecati cupiditate
                                                    non provident et accusamus iusto odio dignissimos et dolorum
                                                    fuga.
                                                </p>
                                                <p>
                                                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>,
                                                    16/04/2018
                                                </p>
                                                <MDBBtn color="primary" size="md">
                                                    Read More
                                                </MDBBtn>
                                            </MDBCol>
                                        </MDBRow>
                                        <hr className="my-5"/>
                                        <MDBRow>
                                            <MDBCol lg="5" xl="4">
                                                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                                    <img
                                                        className="img-fluid"
                                                        src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                                                        alt=""
                                                    />
                                                    <a href="#!">
                                                        <MDBMask overlay="white-slight"/>
                                                    </a>
                                                </MDBView>
                                            </MDBCol>
                                            <MDBCol lg="7" xl="8">
                                                <h3 className="font-weight-bold mb-3 p-0">
                                                    <strong>Title of the news</strong>
                                                </h3>
                                                <p className="dark-grey-text">
                                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                                    ipsum quia dolor sit amet, psam voluptatem quia consectetur.
                                                </p>
                                                <p>
                                                    by <a href="#!" className="font-weight-bold">Jessica Clark</a>,
                                                    12/04/2018
                                                </p>
                                                <MDBBtn color="primary" size="md">
                                                    Read More
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

export default News;
