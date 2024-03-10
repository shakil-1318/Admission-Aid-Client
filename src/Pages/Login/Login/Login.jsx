import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg';


const Login = () => {

    return (
        <>
            <section className="login-section">
                <div className="container">
                    <div className="login-wrapper ">

                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-6 col-lg-6 d-none d-md-block">
                                <img src={login} alt="" />
                            </div>
                            <div className="col-md-6 col-lg-6 login-form">
                                <div className="login-title-wrap">
                                    <h3 className='login-title'>Sign into your account</h3>
                                </div>
                                <Form className='w-100 ' >

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                    <button className='w-100 login-btn my-4 py-3'>Login</button>
                                    <a href='#'>Forgot Password?</a>
                                    <p>Don't have an account?<Link to='/register'> Register here</Link></p>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Login;