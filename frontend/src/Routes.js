import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/About';
import ServicePage from './pages/ServicePage';
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/testimonials';
import News from './pages/News';
import ContactPage from './pages/ContactPage';


class Routes extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {



        const services = this.props.services

        return (

            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/testimonials' component={Testimonials}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/portfolio' component={Portfolio}/>
                <Route exact path='/contact' component={ContactPage} />
                {services.map(service => {
                    return (
                        <Route
                        key={service.id}
                        exact
                        path={'/services/' + service.slug}
                        render={(props) => (
                            <ServicePage {...props} service={service}/>
                        )}
                    />

                )
                })}
                <Route
                    render={function () {
                        return <h1>Not Found</h1>;
                    }}
                />
            </Switch>
        );
    }
}

export default Routes;
