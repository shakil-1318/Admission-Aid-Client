import './FeatureSubject.css';

const FeatureSubject = (props) => {
    const { title, mcq, chapter, img } = props.feature;
    return (
        <div className='feature'>

            <img src={img} alt="" />
            <div className="feature-content">
                <h3>{title}</h3>
                <div>
                    <p>{mcq}</p>
                    <p>{chapter}</p>
                </div>
                <button className="primary-button exam-btn">Start Exam</button>
            </div>
        </div>
    );
};

export default FeatureSubject;