import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
    const logout = () => {
        localStorage.clear();
        props.history.push('/login');
    };

    if (props.location.pathname === "/friends" || props.location.pathname === "/add-friend") {
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Auth Friend</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/friends">Friends</Nav.Link>
                <Nav.Link as={NavLink} to="/add-friend">Add Friend</Nav.Link>
                <Nav.Link onClick={logout}>Log out</Nav.Link>
            </Nav>
        </Navbar>
        );
    };

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Auth Friend</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/friends">Friends</Nav.Link>
                <Nav.Link as={NavLink} to="/add-friend">Add Friend</Nav.Link>
                <Nav.Link as={NavLink} to="/login">Log in</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Navigation;