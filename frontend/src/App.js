import React, {Component} from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBFooter,
    MDBNavLink,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem, MDBIcon
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import {ReactComponent as Logo} from './assets/logo.svg';
import Routes from './Routes';

class App extends Component {

    state = {
        collapseID: '',
        services: [],
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    closeCollapse = collID => () => {
        const {collapseID} = this.state;
        window.scrollTo(0, 0);
        collapseID === collID && this.setState({collapseID: ''});
    };

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/api/services/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(res => this.setState({services: res}))
            .catch(error => console.log(error))
    }

    render() {

        const services = this.state.services;

        const overlay = (
            <div
                id='sidenav-overlay'
                style={{backgroundColor: 'transparent'}}
                onClick={this.toggleCollapse('mainNavbarCollapse')}
            />
        );

        const {collapseID} = this.state;

        return (
            <Router>
                <div className='flyout'>
                    <MDBNavbar color='white' light expand='md' fixed='top' scrolling>
                        <MDBContainer>
                            <MDBNavbarBrand href='/' className='py-0 font-weight-bold'
                            >
                                {/*<Logo style={{height: '2.5rem', width: '2.5rem'}}/>*/}
                                <strong className='align-middle'>СИНГЛИТ</strong>
                            </MDBNavbarBrand>
                            <MDBNavbarToggler
                                onClick={this.toggleCollapse('mainNavbarCollapse')}
                            />
                            <MDBCollapse id='mainNavbarCollapse' isOpen={collapseID} navbar>
                                <MDBNavbarNav left>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            exact
                                            to='/'
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                            }}
                                        >
                                            Главная
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                            }}
                                            to='/about'
                                        >
                                            О нас
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <span className="mr-2">Наши услуги</span>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                {services.map(service => {
                                                    return (
                                                        <MDBDropdownItem key={service.id}
                                                                         href={'/services/' + service.slug}>{service.title}</MDBDropdownItem>
                                                    )
                                                })}
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            exact
                                            to='/testimonials'
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                            }}
                                        >
                                            Отзывы
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                            }}
                                            to='/portfolio'
                                        >
                                            Портфолио
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                            }}
                                            to='/news'
                                        >
                                            Новости
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink
                                            onClick={() => {
                                                this.closeCollapse('mainNavbarCollapse');
                                                // this.navbarColor('contact');
                                            }}
                                            to='/contact'
                                        >
                                            Контакты
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                    {collapseID && overlay}
                    <main>
                        <Routes services={services}/>
                    </main>
                    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
                        <MDBContainer className="text-center text-md-left">
                            <MDBRow>
                                <MDBCol md="6">
                                    <h5 className="title">ООО СИНГЛИТ</h5>
                                    <p>
                                        Успешная компания на протяжении долгих лет. Миссия нашей организации - помочь
                                        заказчикам качественно реализовать самые нестандартные варианты проектов в
                                        минимальные сроки и по доступной цене. Наши менеджеры помогут найти оптимальное
                                        решение для Вашей задачи.
                                    </p>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h5 className="title">Наши услуги</h5>
                                    <ul>
                                        {services.map(service => {
                                            return (

                                                <li key={service.id} className="list-unstyled">
                                                    <a href={'/services/' + service.slug}>{service.title}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </MDBCol>
                                <MDBCol md="3">
                                    <h5 className="title">Наши контакты</h5>
                                    <ul>
                                        <li className='list-unstyled pb-2'>
                                            <MDBIcon icon='map-marker-alt' className='pr-2'/>
                                            Москва, Люсиновская, 12-23</li>
                                        <li className='list-unstyled pb-2'>
                                            <MDBIcon icon='phone' className='pr-2'/>
                                            +7 499 322 88 51</li>
                                        <li className='list-unstyled pb-2'>
                                            <MDBIcon icon='envelope' className='pr-2'/>
                                            contact@example.com</li>
                                    </ul>
                                    <hr className='w-50 text-align-center white mt-1'/>
                                    <ul>
                                        <li className='list-unstyled'></li>
                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="footer-copyright text-center py-3">
                            <MDBContainer fluid>
                                 ООО СИНГЛИТ &copy; 2009 - {new Date().getFullYear()} | Made with <MDBIcon icon='heart'/> by <a
                                href="http://slownut.ru"> SlowNut </a>
                            </MDBContainer>
                        </div>
                    </MDBFooter>
                </div>
            </Router>
        );
    }
}

export default App;

