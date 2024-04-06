import { useEffect, useState } from "react";
import {showsURL} from '../utils/Constants'; 

const RecommendedShows = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() =>{
        const res = await fetch(showsURL);
        const jsonData = await res.json()
        setData(jsonData.events);
    }

    const ShowData = ({show}) =>{
         const id = show.imgUrl.split('/')[5]
         const url = 'https://drive.google.com/thumbnail?id='

         const dateString = show.date.slice(0,10);

         var date = new Date(dateString);
         var monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

         const formattedDate = date.getDate() + " " + monthNames[date.getMonth()] + ", " + date.getFullYear()
         console.log(formattedDate);
         return <div className="event-data">
            <img className='event-image'src={url+id} alt="image" />
            <div className="event-details">
                <p><b>{show.eventName}</b></p>
                <p>{formattedDate}</p>
                <p>{show.cityName}</p>
                <p>{show.weather}</p>
            </div>
         </div>
    } 
    return <div className="show-container">
        <h2>Recommended Events &#x2192;</h2>
        <div className="wrapper">
        {data.map((show,index) => <ShowData key={index} show={show}/>)}
        </div>
    </div>
}

export default RecommendedShows;