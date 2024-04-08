import '../index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
  return (  
    <div className='header'>
      <div className="navbar">
        <h3 className='title'>BookUsNow</h3>
        <div className="nav-items">
        <button className='categories-btn icons'>
          <GiHamburgerMenu className='categories-icon'/>
          Categories
        </button>
        <div className="search icons">
          <input className='search-bar'type="text" placeholder='DJI Phantom'/>
          <CiSearch className='search-icon'/>
        </div>
        <div className="favourites icons">
          <FaHeart />
          Favourites
        </div>
        <button className='sign-in-btn'>Sign in </button>
        </div>
        </div>
      <div className="events">
        <div className="location icons">
          <FaLocationDot />
          Mumbai,India
          <MdKeyboardArrowRight />
        </div>
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