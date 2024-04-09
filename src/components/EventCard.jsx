import { FaLocationDot } from "react-icons/fa6";
const EventCard = ({event}) =>{
    const id = event.imgUrl.split('/')[5]
    const url = 'https://drive.google.com/thumbnail?id='

    const dateString = event.date.slice(0,10);

    var date = new Date(dateString);
    var monthNames = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];
    const weatherInfo = event.weather.split(' ');
    const weather = weatherInfo[0];
    const temperature = weatherInfo[1].slice(0,2) + '°C'
    const formattedDate = monthNames[date.getMonth()] + " " + date.getDate() + ", " +  date.getFullYear()
    
    return <div className="event-data">
       <img className='event-image'src={url+id} alt="image"/>
       <p className="event-date">{formattedDate}</p>
        <p className="event-name"><b>{event.eventName}</b></p>
       <div className="event-details">
           <p className="event-location"><FaLocationDot/>{event.cityName}</p>
           <p className="event-weather-and-distance">{weather+', '+temperature}|{event.distanceKm.slice(0,2)}km</p>
       </div>
    </div>
} 

export default EventCard;