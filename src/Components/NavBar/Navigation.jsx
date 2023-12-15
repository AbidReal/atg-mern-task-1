import { Navbar, Container, Nav, FormControl } from "react-bootstrap";
import { useState } from "react";
import "./Navigation.css";
import { IoMdArrowDropdown } from "react-icons/io";

import logo from "../../../public/logo.svg";
import searchIcon from "https://i.ibb.co/MVjKk2r/baseline-search-24px.png";
import SignUp from "../User/SignUp";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className=" border-bottom">
      {/* mobile, weird by figma accurate design */}
      <div className="d-sm-none bg-white p-2 d-flex justify-content-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="10"
          viewBox="0 0 51 10"
          fill="none"
          style={{ cursor: "pointer" }}
          onClick={() => setShowModal(true)}
        >
          <path d="M0 -0.00012207H10V9.99988H0V-0.00012207Z" fill="#868E96" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 9.99988C28.7614 9.99988 31 7.7613 31 4.99988C31 2.23845 28.7614 -0.00012207 26 -0.00012207C23.2386 -0.00012207 21 2.23845 21 4.99988C21 7.7613 23.2386 9.99988 26 9.99988Z"
            fill="#868E96"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39 -0.00012207H51L45 9.99988L39 -0.00012207Z"
            fill="#868E96"
          />
        </svg>
      </div>

      {/* big screen nav */}
      <div className="fixed-top">
        <div className="bg-white border-bottom custom-padding">
          <Navbar
            expand="lg"
            className="d-none d-sm-block bg-white fixed-top"
            style={{
              justifyContent: "space-between",
              maxWidth: "1440px",
              margin: "12px auto",
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
                    <img
                      src={searchIcon}
                      alt="Search"
                      className="search-icon"
                    />
                    <FormControl
                      type="text"
                      placeholder="         Search for your favorite groups in ATG"
                      className="mt-1 custom-form "
                      style={{ color: "#5c5c5c" }}
                    />
                  </div>
                </Nav>
                <Nav>
                  <div
                    className="custom-nav"
                    onClick={() => setShowModal(true)}
                    style={{ cursor: "pointer" }}
                  >
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
        </div>
      </div>

      {showModal && (
        <SignUp show={showModal} handleClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Navigation;
