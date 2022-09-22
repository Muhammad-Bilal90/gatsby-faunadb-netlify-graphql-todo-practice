import React, { ReactNode, useContext } from 'react';
import { IndentityContext } from '../context/authContext';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'gatsby';


interface Props{
    children: ReactNode
}


const Layout: React.FC<Props> =({children}) => {

    const { user } = useContext(IndentityContext);

    return(
        <div>
            <Navbar collapseOnSelect className="px-3" expand="sm" bg="dark" variant="dark">
                <Navbar.Brand>Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to={"/"} style={{ color: "white" }}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/dashboard"} style={{ color: "white" }}>
                                Dashboard{" "}
                            </Nav.Link>
                            <Navbar.Text>
                                Signed in as:{" "}
                                <span className="">
                                    Bilal
                                </span>
                            </Navbar.Text>

                        </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>{children}</Container>
        </div>
    );
}

export default Layout;