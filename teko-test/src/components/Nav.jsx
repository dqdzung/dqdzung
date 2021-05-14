import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../logo.svg";

const Nav = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark">
				<img src={logo} className="App-logo" alt="logo" />
				<Navbar.Brand>Matthew Computers</Navbar.Brand>
			</Navbar>
		</header>
	);
};

export default Nav;
