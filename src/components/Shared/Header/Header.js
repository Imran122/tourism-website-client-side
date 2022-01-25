import React from 'react';
import './Header.css'
import img from '../../../images/header/logo.png'
import userimg from '../../../images/header/user.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { Button, Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';

import useAuth from '../../../hooks/useAuth';
const Header = () => {
    //firebase google auth
    const { user, logOut } = useAuth();
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
                        <Col lg="2" className="office"><p>A TRAVEL AGENCY</p></Col>
                    </Row>
                </Container>
            </div>
            {/*  navbar part with options*/}
            <header className=" border-bottom">
                <div className="">
                    <div className="d-flex navbar-bg flex-wrap align-items-center justify-content-center justify-content-lg-start sticky-top">

                        <Navbar expand="lg" className="w-75 mx-auto  navbar-contents" >
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
                                        <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/addservice">Add Spots</NavLink></Nav.Link>




                                        {user?.email &&
                                            <>
                                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/myorders">My Orders</NavLink></Nav.Link>
                                                <Nav.Link> </Nav.Link>
                                                <Nav.Link> <NavLink className="navbar-list" activeStyle={activeStyle} to="/manageorders">Manage Orders</NavLink></Nav.Link>
                                                <Nav.Link> </Nav.Link>
                                            </>
                                        }



                                    </Nav>
                                    {user.email ?
                                        <img src={user.photoURL} alt="mdo" width="32" height="32" className="rounded-circle" />
                                        :
                                        <img src={userimg} alt="mdo" width="32" height="28" className="rounded-circle" />

                                    }

                                    <NavDropdown title={user.displayName} className="navbar-list dropdown text-end">

                                        {!user?.email &&
                                            <>
                                                <NavDropdown.Item><NavLink className="navbar-list" activeStyle={activeStyle} to="/login">LogIn</NavLink></NavDropdown.Item>
                                                <NavDropdown.Item><NavLink className="navbar-list" activeStyle={activeStyle} to="/registration">SignUp</NavLink></NavDropdown.Item>
                                            </>
                                        }

                                        {user?.email &&
                                            <Button onClick={logOut} className="logout-button">LogOut</Button>
                                        }
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