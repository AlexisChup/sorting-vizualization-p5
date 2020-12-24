import React, { Component } from 'react'
import {
    Navbar,
    Nav
} from 'react-bootstrap'

import {
    Link
} from 'react-router-dom'

interface Props {
    
}
interface State {
    
}

export class NavbarTs extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Navbar bg="light" expand="lg" className="shadow-lg bg-silver mb-lg-5">
                <Navbar.Brand as={Link} to="/">SVP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home" href="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/bubblesort" href="/bubblesort ">Bubble</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

export default(NavbarTs)
