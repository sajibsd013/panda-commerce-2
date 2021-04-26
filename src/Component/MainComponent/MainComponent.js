import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Body/Home';
import Backpack from './Body/Products/Backpack';
import Shoes from './Body/Products/Shoes';
import Contact from './Body/Products/Contact';
import Features from './Body/Products/Features';
import OrderReview from './Body/Products/OrderReview';
import NotFoundPage from './Body/NotFoundPage';


const MainComponent = () => {
    return (
        <div className='mt-5' >
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/backpack" exact component={Backpack} />
                <Route path="/shoes" exact component={Shoes} />
                <Route path="/Features" exact component={Features} />
                <Route path="/OrderReview" exact component={OrderReview} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/*" exact component={NotFoundPage} />
                {/* <Redirect from="/" to="/home" /> */}
            </Switch>
            <Footer />
        </div>
    );
};

export default MainComponent;