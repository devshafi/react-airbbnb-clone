import heroImage from '../images/photo-grid.png';

export default function Hero() {
    return (
        <section className="hero-container">
            <img src={heroImage} alt='gallery' className='photo-grid' />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities
                led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    )
}