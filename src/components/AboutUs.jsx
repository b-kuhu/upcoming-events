import BannerImg from '../assets/Banner.svg';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <img className='banner-image' src={BannerImg} alt="banner-image" />
            <div className="banner-text">
                <h1>Discover Exciting Events Happening Near You - Stay Tuned For Updates</h1>
                <p>Stay updated on thrilling local events with our website, ensuring you never miss out on exciting experiences nearby.</p>
            </div>
        </div>
    )
}

export default AboutUs;