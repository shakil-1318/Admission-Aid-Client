import card from '../../../assets/student-genius.png';

import './About.css';
const About = () => {
    return (
        <div>
            <section className="about-section">
                <div className="container">
                    <div className="about-header-wrap">
                        <h2 className='about-title'>Why choose our site?</h2>
                    </div>
                    <div className="about-cards">
                        <div className="about-card">
                            <img className='card-img' src={card} alt="" />
                            <h3 className='card-title'>Creative study pattern</h3>
                            <p className='card-text'>Mountains in just switching city steps Might rung line what Was or between towards the have phase.</p>
                        </div>
                        <div className="about-card">
                            <img className='card-img' src={card} alt="" />
                            <h3 className='card-title'>Practice from everywhere</h3>
                            <p className='card-text'>Mountains in just switching city steps Might rung line what Was or between towards the have phase.</p>
                        </div>
                        <div className="about-card">
                            <img className='card-img' src={card} alt="" />
                            <h3 className='card-title'>Ask question to community</h3>
                            <p className='card-text'>Mountains in just switching city steps Might rung line what Was or between towards the have phase.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;