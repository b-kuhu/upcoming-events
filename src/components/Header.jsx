import '../index.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

const Header = () => {
  return (  
    <div className='header'>
      <div className="navbar">
        <h3 className='title'>BookUsNow</h3>
        <div className="nav-items">
        <button className='categories-btn icons'>
          <GiHamburgerMenu className='categories-icon'/>
          <p>Categories</p>
        </button>
        <div className="search icons">
          <input className='search-bar'type="text" placeholder='DJI Phantom'/>
          <CiSearch className='search-icon'/>
        </div>
        <div className="favourites icons">
          <FaHeart className='favourites-icon' />
          <p>Favourites</p>
        </div>
        <button className='sign-in-btn'>
          <p className='sign-in'>Sign in</p>
          <IoMdPerson className='profile-icon'/>
        </button>
        
        </div>
        </div>
      <div className="events">
        <div className="location icons">
          <FaLocationDot className='location-icon'/>
          Mumbai,India
          <MdKeyboardArrowRight className='arrow-icon'/>
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
    </div>
)}
export default Header;