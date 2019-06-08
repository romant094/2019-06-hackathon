import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <NavItem className='mr-3'>
                <Link to={'/login'}>login</Link>
            </NavItem>
            <NavItem className='mr-3'>
                <Link to={'/register'}>register</Link>
            </NavItem>
        </Nav>
    );
};

export default Navbar;