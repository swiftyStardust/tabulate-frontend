import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



class NavBar extends Component {
    render() {
        return (
            <Container>
                <Navbar>
                    <Button variant="info"><NavLink to="/" className="nav">Home</NavLink></Button>
                    <Button variant="light"><NavLink to="/day-sheet" className="nav">Day Sheet</NavLink></Button>
                    <Button variant="light"><NavLink to="/statements" className="nav">Statements</NavLink></Button>
                </Navbar>
            </Container>
        )
    }
}

export default NavBar;