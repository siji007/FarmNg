import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import Carousel from 'react-bootstrap/Carousel'
const NavBar = () => {
    return(
        <Fragment>
            {/* <header id="site-header" className="main-header fixed-top">
                <div className="container w3HeaderLogoEd">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1>
                        <a className="navbar-brand mr-lg-5" href="index.html">FARM<span>NG</span></a>
                        </h1>
                        <button className="navbar-toggler collapsed bg-gradient" type="button" data-toggle="collapse" data-target="#navbar-content"
                        aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars">=</span>
                        <span className="navbar-toggler-icon fa icon-close fa-times">X</span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-content">
                            <ul id="primary-menu" className="navbar-nav ml-auto"><li id="menu-item-21" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-8 current_page_item menu-item-21 nav-item active"><a href="index.html" className="nav-link active">Home</a></li>
                            <li id="menu-item-22" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-22 nav-item"><a href="" className="nav-link">About</a></li>
                            <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23 nav-item"><a href="" className="nav-link">Services</a></li>
                            <li id="menu-item-24" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24 nav-item"><a href="" className="nav-link">Gallery</a></li>
                            <li id="menu-item-26" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-26 nav-item dropdown"><a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="navbar-dropdown-menu-link-26" aria-haspopup="true" aria-expanded="false">Pages</a>
                            <div  className="sub-menu dropdown-menu" aria-labelledby="navbar-dropdown-menu-link-26">
                            <a href="blog-posts/index.html" className="dropdown-item" id="menu-item-27">Blog Posts</a><a href="single-landing-page/index.html" className="dropdown-item" id="menu-item-28">Landing page</a></div>
                            </li>
                            <li id="menu-item-25" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25 nav-item"><a href="contact-page/index.html" className="nav-link">Contact</a></li>
                            </ul>				
                        </div>
                    </nav>
                </div>
            </header> */}
            {/* actions in the sysytem that are not related to payment(entity) approval */}
            <Navbar bg="light px-10 shadow-lg" expand="lg">
                <Navbar.Brand href="#home">FARM NG</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto py-2 text-2xl">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/services">Services</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
};

export default NavBar;
