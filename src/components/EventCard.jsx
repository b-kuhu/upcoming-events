const EventCard = ({event}) =>{
    const id = event.imgUrl.split('/')[5]
    const url = 'https://drive.google.com/thumbnail?id='

    const dateString = event.date.slice(0,10);

    var date = new Date(dateString);
    var monthNames = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];

    const formattedDate = date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear()
    return <div className="event-data">
       <img className='event-image'src={url+id} alt="image"/>
       <div className="event-details">
           <p><b>{event.eventName}</b></p>
           <p>{formattedDate}</p>
           <p>{event.cityName}</p>
           <p>{event.weather}</p>
       </div>
    </div>
} 

export default EventCard;