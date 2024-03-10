
import Form from 'react-bootstrap/Form';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="py-5">
                        <div className="row">
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>
                            <div className="col-6 col-md-2 mb-3">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                                </ul>
                            </div>
                            <div className="col-md-5 offset-md-1 mb-3">
                                <Form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of what's new and exciting from us.</p>
                                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                        <Form.Control type="text" class="form-control" placeholder="Email address" />
                                        <button className="primary-button" type="button">Subscribe</button>
                                    </div>
                                </Form>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="container">
                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                        <div className='d-flex gap-2'>

                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Condition</a>
                            <a href="#">Refund Policy</a>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;