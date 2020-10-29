import React, {Component} from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBMask,
    MDBCardUp,
    MDBAvatar,
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalFooter, MDBModalHeader
} from 'mdbreact';

class Testimonials extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [],
            page: {
                title: '',
                subtitle: '',
                content: '',
                img_alt: '',
                imageURL: '',
            },
            reviews_section: {
                title: '',
                subtitle: '',
                content: '',
                img: [],
            },
        }
    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/api/reviews/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({reviews: res}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/about/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({page: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/reviews_section/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({reviews_section: res[0]}))
            .catch(error => console.log(error))

    }

    toggle = nr => () => {
        let reviews = this.state.reviews;
        let current_review = [];
        let index;
        for (let i in reviews) {
            if (reviews[i].id === nr) {
                index = i;
                current_review = reviews[i];
                reviews.splice(i, 1);
                break;
            }
        }
        current_review.modal = !current_review.modal;
        reviews.splice(index, 0, current_review)
        this.setState({reviews: reviews});
    }

    render() {

        const reviews = this.state.reviews;
        const page = this.state.page;
        const reviews_section = this.state.reviews_section;

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
                                        <section className="text-center my-5">
                                            <h2 className="h1-responsive font-weight-bold my-5">
                                                {reviews_section.title}
                                            </h2>
                                            <div className="col-md-12 col-xl-12 d-flex justify-content-center my-5">
                                                <h5 className="dark-grey-text mb-1">
                                                    {reviews_section.subtitle}
                                                </h5>
                                            </div>
                                            <p className="dark-grey-text w-responsive mx-auto mb-5">
                                                {reviews_section.content}
                                            </p>
                                            <MDBRow>
                                                {reviews.map(review => {
                                                    return (
                                                        <>

                                                            <MDBModal isOpen={review.modal}
                                                                toggle={this.toggle(review.id)}
                                                            className='testimonial-card'>
                                                                <MDBModalHeader toggle={this.toggle(review.id)} className='bg-primary card-up'></MDBModalHeader>
                                                                <MDBAvatar className="mx-auto white">
                                                                        <img
                                                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                                                            alt=""
                                                                            className="rounded-circle img-fluid"
                                                                        />
                                                                    </MDBAvatar>
                                                                <MDBCardBody>
                                                                        <h4 className="font-weight-bold mb-4">{review.name}</h4>
                                                                        <hr/>
                                                                        <p className="dark-grey-text mt-4">
                                                                            <MDBIcon icon="quote-left"
                                                                                     className="pr-2"/>
                                                                            {review.content}

                                                                        </p>

                                                                    </MDBCardBody>
                                                            </MDBModal>

                                                            <MDBCol key={review.id} lg="4" md="12"
                                                                    className="mb-lg-0 mb-4">
                                                                <MDBCard testimonial>
                                                                    <MDBCardUp color="primary"/>
                                                                    <MDBAvatar className="mx-auto white">
                                                                        <img
                                                                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                                                                            alt=""
                                                                            className="rounded-circle img-fluid"
                                                                        />
                                                                    </MDBAvatar>
                                                                    <MDBCardBody>
                                                                        <h4 className="font-weight-bold mb-4">{review.name}</h4>
                                                                        <hr/>
                                                                        <p className="dark-grey-text mt-4">
                                                                            <MDBIcon icon="quote-left"
                                                                                     className="pr-2"/>

                                                                            {review.content.length > 120 ?
                                                                                `${review.content.substring(0, 120)}...` : review.content
                                                                            }

                                                                        </p>

                                                                        {review.content.length > 120 ?
                                                                            <MDBBtn color="primary"
                                                                                    onClick={this.toggle(review.id)}>Подробнее</MDBBtn> : false}


                                                                    </MDBCardBody>
                                                                </MDBCard>
                                                            </MDBCol>
                                                        </>
                                                    )
                                                })}
                                            </MDBRow>
                                        </section>
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

export default Testimonials;
