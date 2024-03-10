import './Banner.css'

const Banner = () => {
    return (
        <header className="hero">
            <div className="container">
                <div className="hero-content-wrapper">
                    <h1 className='hero-title'>Discover the  best way for the best learning</h1>
                    <div className='hero-sub-text-wrap'>
                        <p className='hero-sub-text'>Online learning and teaching platform on various subject. Help each other to acquire new skills.</p>
                    </div>
                    <div className="hero-btn-wrap">
                        <button className='primary-button'>Learn Now</button>
                        <button className='primary-button secondary'>Join Community</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;