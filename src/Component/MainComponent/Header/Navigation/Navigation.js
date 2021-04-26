import React, { useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        AddedItem: state.AddedItem
    }
}
const Navigation = (props) => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const onToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

    if (isNavOpen) {
        var LinkToggle = () => {
            setIsNavOpen(!isNavOpen);
        }
    }
    return (
        <div className='bg-light '>
            <Navbar light color="info" expand='md' className='fixed-top'>
                <div className="container">
                    <NavbarBrand> <Link to='/'> <img src="assets/images/logo.png" alt="" /></Link></NavbarBrand>
                    <NavbarToggler onClick={onToggle} />
                    <Collapse navbar isOpen={isNavOpen} >
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <Link to="/" active className="nav-link "  onClick={LinkToggle}>Home </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/shoes" className="nav-link " onClick={LinkToggle}>Shoes </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/backpack" className="nav-link" onClick={LinkToggle}>Backpack </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link " onClick={LinkToggle}>Contact </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link " onClick={LinkToggle}>About </Link>
                            </NavItem>
                            <NavItem  >
                                <Link to="/OrderReview" className="nav-link" onClick={LinkToggle}>
                                    Cart <Badge color='dark'>{props.AddedItem.length}  </Badge>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </div>
            </Navbar>

        </div>
    );
};

export default connect(mapStateToProps)(Navigation);