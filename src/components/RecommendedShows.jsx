import { useEffect, useState } from "react";
import {showsURL} from '../utils/Constants'; 
import EventCard from "./EventCard";

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

    
    return <div className="show-container">
        <h2>Recommended Events &#x2192;</h2>
        <div className="wrapper">
        {data.map((show,index) => <EventCard key={index} event={show}/>)}
        </div>
    </div>
}

export default RecommendedShows;