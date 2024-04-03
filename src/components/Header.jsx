import '../index.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faBars} from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
const Header = () => {
  return (  
    <div className='header'>
      <div className="navbar">
        <h3 className='title'>BookUsNow</h3>
        <button className='categories-btn'>Categories</button>
        <input className='searchbar' type="text" placeholder='DJI Phantom'/>
        <p>Favourites</p>
        <button className='sign-in-btn'>Sign in </button>
        </div>
      <div className="events">
        <p>Mumbai,India</p>
        <ul className="event-types">
          <li>Live Shows</li>
          <li>Streams</li>
          <li>Movies</li>
          <li>Plays</li>
          <li>Events</li>
          <li>Sports</li>
          <li>Activities</li>
        </ul>  
      </div>  
  {/* <img src={BannerImg} alt='banner image'/> */}
    </div>
)}
export default Header;