import './State.css';
import desktop from '../../../assets/desktop.png';
import future from '../../../assets/student-genius.webp';
import test from '../../../assets/tests-taken.png';
import apple from '../../../assets/apple.webp';

const State = () => {
    return (
        <section className='counter-section'>
            <div className="container">
                <div className="counters">
                    <div className="counter">
                        <img className='counter-img' src={desktop} alt="" />
                        <h3 className='counter-number'>200</h3>
                        <p className='counter-text'>LEARN ANYTHING</p>
                    </div>
                    <div className="counter">
                        <img className='counter-img' src={future} alt="" />
                        <h3 className='counter-number'>400</h3>
                        <p className='counter-text'>FUTURE GENIUS</p>
                    </div>
                    <div className="counter">
                        <img className='counter-img' src={test} alt="" />
                        <h3 className='counter-number'>900</h3>
                        <p className='counter-text'>THATS A LOT</p>
                    </div>
                    <div className="counter">
                        <img className='counter-img' src={apple} alt="" />
                        <h3 className='counter-number'>200</h3>
                        <p className='counter-text'>ALL TRAINED PROFESSIONALS</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default State;