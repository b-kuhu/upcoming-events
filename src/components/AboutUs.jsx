import BannerImg from '../assets/Banner.svg';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <img className='banner-image' src={BannerImg} alt="banner-image" />
            <div className="banner-text">
                <h1>Discover Exciting Events Happening Near You - Stay Tuned For Updates</h1>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis veniam .</p>
            </div>
        </div>
    )
}

export default AboutUs;