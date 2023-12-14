import { Navbar, Container, Nav, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Navigation.css";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../../../public/logo.svg";
import searchIcon from "../../../public/baseline-search-24px.svg";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className="mobile-view"
        style={{ backgroundColor: "white", height: "24px" }}
      />
    );
  }

  return (
    <Navbar
      expand="xxl"
      style={{
        justifyContent: "space-between",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <div className="relative-container">
              <img src={searchIcon} alt="Search" className="search-icon" />
              <FormControl
                type="text"
                placeholder="         Search for your favorite groups in ATG"
                className="mr-sm-2 custom-form"
                style={{ color: "#5c5c5c" }}
              />
            </div>
          </Nav>
          <Nav>
            <div className="custom-nav">
              Create account.
              <a style={{ color: "#2F6CE5", fontWeight: 700 }}>
                It&rsquo;s free!
              </a>
              <IoMdArrowDropdown />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
