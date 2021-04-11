import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const onToggle = () =>{
        setIsNavOpen(!isNavOpen)
    }
    return (
        <div className='bg-light'>
            <Navbar light color="light" expand='sm'>
                <div className="container">
                    <NavbarBrand> <Link to='/'> <img src="assets/images/logo.png" alt="" /></Link></NavbarBrand>
                    <NavbarToggler onClick={onToggle}/>
                    <Collapse navbar isOpen={isNavOpen} >
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Link to="/" active className="nav-link" >Home </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/shoes" className="nav-link" >Shoes </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/backpack" className="nav-link">Backpack </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link" >Contact </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>

        </div>
    );
};

export default Navigation;