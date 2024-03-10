
import Feature from '../Feature/Feature';
import './Features.css';


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
]

const Features = () => {
    return (
        <section className='home-feature-section'>
            <div className="container">
                <div className='features-header-wrap'>
                    <h2 className='features-title'> Start your learning</h2>
                    <p className='features-text'>LEARNING VIA APP NEVER GETS EASIER</p>
                </div>
                <div className="home-features">
                    {
                        features.slice(0, 3).map(feature => <Feature
                            key={feature.name}
                            feature={feature}
                        ></Feature>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;