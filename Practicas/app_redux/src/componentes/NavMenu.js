import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavMenu = () => {
    return ( 
        <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/tienda">Tienda</NavLink>
        </Menu>
     );
}
 
export default NavMenu;

const Menu = styled.nav`
width: 100%;
text-align: center;
background: #092c4c;
grid-column: span 2;
border-radius: 3px;

a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
}

a:hover {
    background: #1d85e8;
    text-decoration: none;
}
`;