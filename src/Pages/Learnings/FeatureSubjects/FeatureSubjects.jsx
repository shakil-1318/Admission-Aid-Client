import FeatureSubject from '../FeatureSubject/FeatureSubject';
import './FeatureSubjects.css';

const features = [
    {
        title: "Physics",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
    {
        title: "Chemistry",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
    {
        title: "Math",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
    {
        title: "Physics",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
    {
        title: "Physics",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
    {
        title: "Physics",
        mcq: 50,
        chapter: 10,
        img: "https://i.ibb.co/g9TdN4c/Rectangle-140.jpg"

    },
]

const FeatureSubjects = () => {
    return (
        <section className='home-feature-section featuresubject'>
            <header className='feature-banner'>
                <div className="banner-content-wrapper">
                    <h1 className=''>Search Your Favourite Subjects</h1>
                    <form className='form-wrap' action="">

                        <input className='search-input' type="text" name="" id="" placeholder='Search' />
                        <button className='search-button'>Search</button>

                    </form>
                </div>
            </header>
            <div className="container py-5">
                {/* <div className='features-header-wrap'>
                    <h2 className='features-title'> Start your learning</h2>
                    <p className='features-text'>LEARNING VIA APP NEVER GETS EASIER</p>
                </div> */}
                <div className="home-features">
                    {

                        features.map(feature => <FeatureSubject
                            key={feature.name}
                            feature={feature}
                        ></FeatureSubject>)
                    }
                </div>
            </div>
        </section>
    );
};

export default FeatureSubjects;