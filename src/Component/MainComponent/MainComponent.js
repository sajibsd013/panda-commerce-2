import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Route, Switch,Redirect } from 'react-router-dom'
import Home from './Body/Home';
import Backpack from './Body/Products/Backpack';
import Shoes from './Body/Products/Shoes';
import Contact from './Body/Products/Contact';


const MainComponent = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/backpack" exact component={Backpack} />
                <Route path="/shoes" exact component={Shoes} />
                <Route path="/contact" exact component={Contact} />
                <Redirect from="/" to="/home"/>
            </Switch>
            <Footer />
        </div>
    );
};

export default MainComponent;