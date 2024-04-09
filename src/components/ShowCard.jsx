import { FaLocationDot } from "react-icons/fa6";
const EventCard = ({show}) =>{
    const id = show.imgUrl.split('/')[5]
    const url = 'https://drive.google.com/thumbnail?id='

    const dateString = show.date.slice(0,10);

    var date = new Date(dateString);
    var monthNames = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];
    const weatherInfo = show.weather.split(' ');
    const weather = weatherInfo[0];
    const temperature = weatherInfo[1].slice(0,2) + '°C'
    const formattedDate = monthNames[date.getMonth()] + " " + date.getDate() + ", " +  date.getFullYear()
    
    return <div className="show-data">
       <img className='show-image'src={url+id} alt="image"/>
       <div className="show-details">
           <p className="show-name"><b>{show.eventName}</b></p>
           <p className="show-date">{formattedDate}</p>
           <p className="show-location"><FaLocationDot/>{show.cityName}</p>
           <p className="show-weather-and-distance">{weather+', '+temperature}|{show.distanceKm.slice(0,2)}km</p>
       </div>
    </div>
} 

export default EventCard;