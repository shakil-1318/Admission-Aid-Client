import contact from '../../assets/contact-us.png';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="contact-img-wrapper">
                        <img className='img-fluid' src={contact} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="contact-content-wrapper">
                        <div className="contact-header-wrapper">
                            <h2 className='contact-title'>Connect with us</h2>
                            <p className='contact-text'>Want to chat? We’d love to hear from you! Get in touch with our Customer Success Team to inquire about speaking events, advertising rates, or just say hello.</p>
                        </div>
                        <div className="contact-info-wrapper">
                            <div className="contact-info">
                                <h6>Address:</h6>
                                <p>Jashore 7408, Khulna</p>
                            </div>
                            <div className="contact-info">
                                <h6>Email:</h6>
                                <p>email1@email.com</p>
                                <p>email2@email.com</p>
                            </div>
                            <div className="contact-info">
                                <h6>Phone:</h6>
                                <p>018821312</p>
                                <p>018821312</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;