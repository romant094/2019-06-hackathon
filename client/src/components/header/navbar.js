import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <NavItem className='mr-3'>
                <Link to={'/'}>Start page</Link>
            </NavItem>
            <NavItem className='mr-3'>
                <Link to={'/opened'}>Opened page</Link>
            </NavItem>
            <NavItem>
                <Link to={'/closed'}>Closed page</Link>
            </NavItem>
        </Nav>
    );
};

export default Navbar;