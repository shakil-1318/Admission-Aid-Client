import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { Link } from 'react-router-dom';
import login from '../../../assets/login.jpg';


const Register = () => {

    return (
        <section className="login-section">
            <div className="container">
                <div className="login-wrapper ">

                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-6 d-none d-md-block">
                            <img src={login} alt="" />
                        </div>
                        <div className="col-md-6 col-lg-6 login-form">
                            <div className="login-title-wrap">
                                <h3 className='login-title'>Sign up your account</h3>
                            </div>
                            <Form className='w-100 ' >
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="First Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="First Name" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Last Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Last Name" />
                                </FloatingLabel>

                                <Form.Select aria-label="Default select example" className='mb-3 py-3'>
                                    <option>Gender</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                </Form.Select>

                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>

                                <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                                    <Form.Control type="Confirm password" placeholder="Confirm Password" />
                                </FloatingLabel>
                                <button className='w-100 login-btn mt-3 py-3'>Login</button>
                                <button className='w-100 login-btn google mt-3  py-3'>
                                    <i class="fab fa-google me-2"></i>
                                    Sign Up With Google</button>
                                <button className='w-100 login-btn facebook my-3 py-3'>
                                    <i class="fab fa-facebook-f  me-2"></i>
                                    Sign Up With Google</button>
                                <p> Have an account?<Link to='/login'> Login here</Link></p>

                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Register;