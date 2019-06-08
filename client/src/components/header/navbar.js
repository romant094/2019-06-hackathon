import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <Nav>
            <NavItem className='mr-3'>
                <Link to={'/entering'}>Поступление</Link>
            </NavItem>
            <NavItem className='mr-3'>
                <Link to={'/documents'}>Мои документы</Link>
            </NavItem>
            <NavItem className='mr-3'>
                <Link to={'/achievements'}>Достижения</Link>
            </NavItem>
            <NavItem className='mr-3'>
                <Link to={'/profitability'}>Рентабельность</Link>
            </NavItem>
            <NavItem>
                <Link to={'/development'}>Развитие</Link>
            </NavItem>
        </Nav>
    );
};

export default Navbar;