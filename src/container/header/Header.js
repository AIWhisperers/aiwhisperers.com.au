import React from 'react'

import {Link, NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {LinkContainer} from 'react-router-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faMediumM, faReddit, faTwitter} from '@fortawesome/free-brands-svg-icons'


const SiteAnchor = ({label, link, ...rest}) => (
  <Nav.Item>
    <NavLink className="nav-link" to={link}>
      {label}
    </NavLink>
  </Nav.Item>
)

const SocialAnchor = ({icon, handle, link}) => (
  <NavDropdown.Item href={link} target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={icon} className="fa-fw"/>
    &nbsp; {handle}
  </NavDropdown.Item>
)


const Header = ({...props}) => {

  const isBorder = ["/about", "/apps", "/clients", "/contact", "/devs", "/investors"].includes(window.location.pathname)

  return (
    <Navbar className={"header p-1 " + (isBorder ? "border-bottom shadow-bottom" : "")} bg="white" expand="lg" fixed="top">
      <Container className="py-2">
        <Navbar.Brand className="d-flex p-0" href="home">
          <div className="header-logo-square">&nbsp;</div>
          <div className="header-logo-name">&nbsp;</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="id-site-nav" className="pt-1 toggle-button border-0">
          <FontAwesomeIcon icon={faBars} className="text-dark font-30" />
        </Navbar.Toggle>
        <Navbar.Collapse id="id-site-nav">
          <Nav className="text-dark px-3 pt-1">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="apps">Apps</Nav.Link>
            <Nav.Link href="clients">Clients</Nav.Link>
            <Nav.Link href="devs">Devs</Nav.Link>
            <Nav.Link href="investors">Investors</Nav.Link>
            <NavDropdown title="Socials" id="basic-nav-dropdown">
              <SocialAnchor icon={faMediumM} handle="Medium" link="https://medium.com/@aiwhisperers"/>
              <NavDropdown.Divider />
              <SocialAnchor icon={faTwitter} handle="Twitter" link="https://twitter.com/AIWhisperers"/>
              <SocialAnchor icon={faFacebook} handle="Facebook" link="https://www.facebook.com/aiwhisperers"/>
              <SocialAnchor icon={faInstagram} handle="Instagram" link="https://www.instagram.com/aiwhisperers.com.au/"/>
              <SocialAnchor icon={faReddit} handle="Reddit" link="https://www.reddit.com/user/AIWhisperers"/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>        
      </Container>
    </Navbar>
  )
}

export default Header
