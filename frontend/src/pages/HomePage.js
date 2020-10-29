import React from 'react';
import Helmet from "react-helmet"
import {
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
    MDBEdgeHeader,
    MDBFreeBird,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBCardBody,
    MDBIcon,
    MDBCard,
    MDBCardTitle,
    MDBCardImage,
    MDBCardText,
    MDBAnimation,
    MDBNavLink,
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView,
    MDBMask,
    MDBBadge,
    MDBCardUp,
    MDBAvatar,
    MDBBtn,
    MDBInput,
    MDBDropdownItem,
    MDBLink,
    MDBBtnGroup,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter

} from 'mdbreact';
import './HomePage.css';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modals: [],
            page_seo: {
                title: '',
                description: '',
                og_title: '',
                og_description: '',
                og_url: '',
                og_image: '',
                og_type: '',
                meta1: '',
            },
            intro: {
                title: '',
                subtitle: '',
                content: '',
                img: [],
            },
            services_section: {
                title: '',
                subtitle: '',
                content: '',
                img: [],
            },
            services: [],
            quote: {
                text: '',
                author: '',
                slug: '',
                background_img_alt: '',
                background_img: '',
                img: [],
            },
            pros_section: {
                title: '',
                subtitle: '',
                content: '',
                img: [],
            },
            pros_elements: [],
            reviews_section: {
                title: '',
                subtitle: '',
                content: '',
                img: [],
            },
            reviews: [],
        }
    }

    componentDidMount() {

        fetch(process.env.REACT_APP_API_URL + "/api/home/page_seo/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({page_seo: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/intro/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({intro: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/services_section/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({services_section: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/services/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({services: res}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/quote/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({quote: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/pros_section/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({pros_section: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/pros_elements/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({pros_elements: res}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/home/reviews_section/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({reviews_section: res[0]}))
            .catch(error => console.log(error))

        fetch(process.env.REACT_APP_API_URL + "/api/reviews/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({reviews: res}))
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

        const page_seo = this.state.page_seo;
        const intro = this.state.intro;
        const services_section = this.state.services_section;
        const services = this.state.services;
        const quote = this.state.quote;
        const pros_section = this.state.pros_section;
        const pros_elements = this.state.pros_elements;
        const reviews_section = this.state.reviews_section;
        const reviews = this.state.reviews;
        const length = this.state.services.length;

        const getIcon = str => {
            let ar = str.split(':');
            return ar[2]
        }

        return (
            <>
                <MDBCarousel
                    activeItem={1}
                    length={length}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                    style={{height: '70vh', marginTop: '65px'}}
                >
                    <MDBView
                        style={{height: '70vh'}}
                    >
                        <MDBCarouselInner
                            style={{height: '70vh'}}
                        >
                            {services.map(service => {
                                return (

                                    <MDBCarouselItem key={service.id}
                                                     itemId={service.id}>
                                        <div
                                            style={{
                                                backgroundImage: "url(" + service['img'] + ")",
                                                height: '100%',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <MDBMask overlay="black-slight"/>
                                        </div>
                                        <MDBCarouselCaption className="h-100">
                                            <MDBContainer
                                                className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
                                                style={{height: '100%', width: '100%'}}
                                            >
                                                <MDBRow>
                                                    <MDBCol md='12' className='mb-4 white-text text-center'>
                                                        <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                                                            {service['title']}
                                                        </h3>
                                                        <hr className='hr-light my-4 w-75'/>
                                                        <h4 className='subtext-header mt-2 mb-4'>
                                                            {service['subtitle']}
                                                        </h4>
                                                        <MDBBtn
                                                            outline rounded color='white'
                                                            href={'/services/' + service.slug}>
                                                            <MDBIcon icon='home'/> Подробнее
                                                        </MDBBtn>
                                                    </MDBCol>
                                                </MDBRow>
                                            </MDBContainer>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                )
                            })}
                        </MDBCarouselInner>
                    </MDBView>
                </MDBCarousel>
                <MDBContainer className='mb-4'>
                    <h2 className="h1-responsive font-weight-bold my-5 text-center">
                        {intro['title']}
                    </h2>
                    <div className="col-md-12 col-xl-12 d-flex justify-content-center my-5">
                        <h5 className="dark-grey-text mb-1">
                            {intro['subtitle']}
                        </h5>
                    </div>
                    <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                        {intro['content']}
                    </p>
                    <MDBRow>
                        {intro['img'].map(img => {
                            return (

                                <MDBCol key={img.id} md="12" lg="4" className="mb-lg-0 mb-5">
                                    <MDBView hover rounded className="z-depth-1-half mb-4">
                                        <img
                                            className="img-fluid"
                                            src={process.env.REACT_APP_API_URL + img}
                                            alt=""
                                        />
                                        <a href="#!">
                                            <MDBMask overlay="white-slight" className="waves-light"/>
                                        </a>
                                    </MDBView>
                                </MDBCol>

                            )
                        })}

                    </MDBRow>
                    <hr/>
                    <h2 className="h1-responsive font-weight-bold my-5 text-center">
                        {pros_section['title']}
                    </h2>
                    <div className="col-md-12 col-xl-12 d-flex justify-content-center my-5">
                        <h5 className="dark-grey-text mb-1">
                            {pros_section['subtitle']}
                        </h5>
                    </div>
                    <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                        {pros_section['content']}
                    </p>
                    <MDBRow>

                        {pros_elements.map(element => {
                            return (

                                <MDBCol key={element.id} md="3" className="mb-lg-0 mb-5 text-center">
                                    <MDBIcon icon={getIcon(element.icon)} size="4x" className="primary-text"/>
                                    <h5 className="font-weight-bold mb-4"></h5>
                                    <p className="grey-text">{element.content}</p>
                                </MDBCol>

                            )
                        })}

                    </MDBRow>
                    <hr/>
                    <h2 className="h1-responsive font-weight-bold my-5 text-center">
                        {services_section['title']}
                    </h2>
                    <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                        {services_section['content']}
                    </p>
                    <MDBRow>

                        {services.map(service => {
                            return (

                                <MDBCol key={service.id} md='4 mb-4'>

                                    <MDBLink
                                        style={{color: 'black'}}
                                        to={'/services/' + service['slug']}
                                    >
                                        <MDBCard wide cascade>
                                            <MDBView cascade>
                                                <MDBCardImage
                                                    hover
                                                    overlay='white-slight'
                                                    className='card-img-top'
                                                    src={service['img']}
                                                    alt='Card cap'
                                                />
                                            </MDBView>

                                            <MDBCardBody cascade className='text-center'>
                                                <MDBCardTitle className='card-title'>
                                                    <strong>{service['title']}</strong>
                                                </MDBCardTitle>
                                                <MDBCardText>
                                                </MDBCardText>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBLink>
                                </MDBCol>

                            )
                        })}

                    </MDBRow>
                </MDBContainer>
                <div className='mb-4'>
                    <div className="streak streak-photo streak-md"
                         style={{backgroundImage: 'url(' + 'https://mdbootstrap.com/img/Photos/Horizontal/City/12-col/img%20%2822%29.jpg' + ')'}}>
                        <div className="flex-center mask rgba-indigo-strong">
                            <div className="text-center white-text">
                                <h2 className="h2-responsive mb-5">
                                    <MDBIcon icon="quote-left"/>
                                    {quote['text']}
                                    <MDBIcon icon="quote-right"/></h2>
                                <h5 className="text-center font-italic wow fadeIn" data-wow-delay="0.2s"
                                    style={{
                                        visibility: 'visible',
                                        animationName: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                >~ {quote['author']}</h5>
                            </div>
                        </div>
                    </div>
                </div>
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
                                            <MDBModalHeader toggle={this.toggle(review.id)}
                                                            className='bg-primary card-up'></MDBModalHeader>
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
                <div className='mb-4'>
                    <div className="streak streak-photo streak-md"
                         style={{
                             backgroundImage: 'url(' + 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img%20%2818%29.jpg' + ')'
                         }}
                    >
                        <div className="mask flex-center rgba-black-strong">
                            <MDBContainer>
                                <div className="text-center white-text">

                                    <h3 className="text-center text-white mb-5 text-uppercase font-weight-bold wow fadeIn"
                                        data-wow-delay="0.2s"
                                        style={{
                                            visibility: 'visible',
                                        }}
                                    >Great people trusted our services</h3>

                                    <div className="row text-white text-center wow fadeIn" data-wow-delay="0.2s"
                                         style={{
                                             visibility: 'visible',
                                         }}
                                    >

                                        <div className="col-md-3 mb-2">
                                            <h1 className="amber-text mb-1 font-weight-bold">+950</h1>
                                            <p>Happy clients</p>
                                        </div>


                                        <div className="col-md-3 mb-2">
                                            <h1 className="amber-text mb-1 font-weight-bold">+150</h1>
                                            <p>Projects completed</p>
                                        </div>


                                        <div className="col-md-3 mb-2">
                                            <h1 className="amber-text mb-1 font-weight-bold">+85</h1>
                                            <p>Winning awards</p>
                                        </div>


                                        <div className="col-md-3">
                                            <h1 className="amber-text mb-1 font-weight-bold">+246</h1>
                                            <p>Cups of coffee</p>
                                        </div>

                                    </div>
                                </div>
                            </MDBContainer>
                        </div>
                    </div>
                </div>
                <MDBContainer className='my-5'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='6'>
                                    <div className='h-100 w-100 d-flex justify-content-center align-items-center'>По
                                        всем вопросам касаемо предоставляемых услуг, стоимости и заказа работ Вы
                                        всегда можете обратиться к нам по телефону, или перейти в раздел контакты и
                                        оставить заявку на звонок.
                                        Наши менеджеры помогут Вам найти оптимальное решения для Вашей задачи и
                                        проконсультировать по
                                        стоимости необходимых услуг.
                                    </div>
                                </MDBCol>
                                <MDBCol md='6'>
                                    <form>
                                        <p className="h5 text-center mb-4">Оставьте заявку</p>
                                        <div className="grey-text">
                                            <MDBInput label="Ваше имя" required group type="text" validate
                                                      error="wrong"
                                                      success="right"/>
                                            <MDBInput label="Ваш email" required group type="email" validate
                                                      error="wrong"
                                                      success="right"/>
                                            <MDBInput label="Ваш телефон" required group type="text" validate
                                                      error="wrong"
                                                      success="right"/>
                                            <MDBInput label="Название организации" group type="text" validate
                                                      error="wrong" success="right"/>
                                            <MDBSelect label="Выберите услугу">
                                                <MDBSelectInput group required/>
                                                <MDBSelectOptions>
                                                    <MDBSelectOption disabled>Наши услуги:</MDBSelectOption>
                                                    {services.map(service => {
                                                        return (

                                                            <MDBSelectOption key={service.id}
                                                                             value={service['slug']}>{service['title']}</MDBSelectOption>

                                                        )
                                                    })}
                                                    <MDBSelectOption value="other">Другое</MDBSelectOption>
                                                </MDBSelectOptions>
                                            </MDBSelect>
                                        </div>
                                        <div className="text-center">
                                            <MDBBtn outline color="indigo" type='submit'>
                                                Отправить
                                                <MDBIcon far icon="paper-plane" className="ml-1"/>
                                            </MDBBtn>
                                        </div>
                                    </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>

            </>
        );
    }
}

export default HomePage;
