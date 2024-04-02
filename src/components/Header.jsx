import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
const Header = () => {
  return (  
    <div className='navbar'>
        <h3 className='title'>BookUsNow</h3>


        <button className='categories-btn'><FontAwesomeIcon icon={faBars} />Categories</button>
        <input className='searchbar' type="text" placeholder='DJI Phantom'/>
        <p>Favourites</p>
        <button className='sign-in-btn'>Sign in </button>

  {/* <img src={BannerImg} alt='banner image'/> */}
    </div>
)}
export default Header;