import React from 'react';
import './Header.css'
import img from '../../../images/header/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
const Header = () => {
    const element = <FontAwesomeIcon icon={faCoffee} />
    //style active nav 

    const activeStyle = {
        fontWeight: "bold",
        color: "#01d6a3"

    }
    return (
        <div className="main-part-header ">
            <div className="navbar-address mx-auto">
                <Container className="d-none d-sm-block">

                    <Row className="justify-content-md-center">
                        <Col><p>234/dhanmondi, Dhaka, Bangladesh, BD</p></Col>
                        <Col><p>Mon - Sat 8.00 - 18.00. Sunday CLOSED</p></Col>
                        <Col lg="2" className="office"><p>ISLAND TRAVEL PLANNER</p></Col>
                    </Row>
                </Container>
            </div>
            {/*  navbar part with options*/}
            <header className=" border-bottom">
                <div className="">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start sticky-top">

                        <Navbar expand="lg" className="w-100 mx-auto  navbar-contents" >
                            <Container fluid >
                                <Navbar.Brand href="#">
                                    <img src={img} className="brand-img" alt="" />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/home">Home</NavLink></Nav.Link>

                                        <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/ourservices">My Orders</NavLink></Nav.Link>
                                        <Nav.Link> </Nav.Link>
                                        <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/ourservices">Manage Orders</NavLink></Nav.Link>
                                        <Nav.Link> </Nav.Link>



                                    </Nav>
                                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />

                                    <NavDropdown title="hello" className="navbar-list dropdown text-end">

                                        <NavDropdown.Item><NavLink className="navbar-list" activeStyle={activeStyle} to="/shop">Shop</NavLink></NavDropdown.Item>
                                        <NavDropdown.Item><NavLink className="navbar-list" activeStyle={activeStyle} to="/article">Article</NavLink></NavDropdown.Item>

                                    </NavDropdown>
                                </Navbar.Collapse>



                            </Container>

                        </Navbar>




                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;