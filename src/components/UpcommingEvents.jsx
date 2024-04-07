import { useEffect, useState } from "react";
import { eventURL } from "../utils/Constants";
import EventCard from "./EventCard";
const UpcomingEvents = () =>{
    const [events,setEvents] = useState([]);
    const [page,setPage] = useState(1);
    const [pageSize,setPageSize] = useState(1);
    const [loading,setLoading] = useState(true);
    const fetchData = async() =>{
        const res = await fetch(eventURL+`page=${page}&type=upcoming`);
        console.log("current page : ",page);
        const jsonData = await res.json();
        setEvents((prev) => [...prev, ...jsonData.events]);
        setLoading(false)
        setPageSize(jsonData.totalPages)
    }
    useEffect(() =>{
        fetchData()
    },[page])

    console.log("pages : ",page,"page size : ",pageSize)
    const handleScroll = async() => {
        
            // document.documentElement.scrollHeight // full height of our web page
            // window.innerHeight // browser window's viewport height 
            // scrolled height: ",document.documentElement.scrollTop//no of pixels that the document has been scrolled vertically
        if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight){
            setLoading(true)
            setPage((prev) => prev+1);
        }
    }    

    useEffect(() =>{
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return <div className="upcoming_events">
        <h3>Upcoming Events &#x2192; </h3>
        <div className="events_container"> 
            {events.map((event,index) => <EventCard key={index} event={event}/> )}
        </div>
            {loading && page<pageSize && <h1>Loading...</h1>}
    </div>
} 

export default UpcomingEvents;