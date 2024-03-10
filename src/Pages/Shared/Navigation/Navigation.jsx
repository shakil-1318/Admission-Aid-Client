import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
            {/* <nav className="top-nav">
                <div className="container top-nav-border">
                    <div className="row justify-content-between align-items-center py-2">
                        <div className="col-auto d-flex align-items-centers gap-3">
                            <p className='m-0'>

                                <span>just@cse.edu.bd</span>
                            </p>
                            <p className='m-0'>

                                <span>(219) 555-0114</span>
                            </p>
                        </div>
                        <div className="col-auto">
                            <div className="login-link d-flex align-items-center gap-3">
                                <li>
                                    <i className="fa fa-unlock-alt"></i>
                                    <a href="#">Login</a>
                                </li>
                                <li>
                                    <i className="fa fa-user-times"></i>
                                    <a href="#">Register</a>
                                </li>


                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark" className="main-nav py-3 st">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img className='logo' src={logo} alt="" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto gap-3">
                            <Link to="/"> <Nav.Link href="#features" className='navbar-link'>Home</Nav.Link></Link>
                            <Link to="/featuresubject"> <Nav.Link href="#pricing" className='navbar-link'>MCQ LM</Nav.Link></Link>
                            <Nav.Link href="#pricing" className='navbar-link'>Community</Nav.Link>
                            <Nav.Link href="#pricing" className='navbar-link'>About</Nav.Link>
                            <Link to="/contact"> <Nav.Link href="#pricing" className='navbar-link'>Contact</Nav.Link></Link>

                        </Nav>
                        <div className="nav-right-login">
                            <div className="login-link d-flex align-items-center gap-3">
                                <li>
                                    <Link to="/login"><i className="fa fa-unlock-alt"></i> Login</Link>

                                    {/* <a href="#"></a> */}
                                </li>


                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;