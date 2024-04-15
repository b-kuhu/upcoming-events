import { useEffect, useState } from "react";
import ShowCard from './ShowCard';
const RecommendedShows = () => {
    const [data,setData] = useState([]);    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        fetchData()
    },[])
    const fetchData = async() =>{
        const res = await fetch(process.env.REACT_APP_showsURL);
        const jsonData = await res.json()
        setData(jsonData.events);
    }

    const interval = 2000

    useEffect(() => {
        let sliderInterval;
        if (isHovered) {
          sliderInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
          }, interval);
        }
        return () => clearInterval(sliderInterval);
      }, [currentIndex, interval, isHovered, data.length]);
      
      const handleHover = () => {
        setIsHovered(true);
      };
    
      const handleLeave = () => {
        setIsHovered(false);
      };
    
    return <>
    <div className="show-container" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <h2>Recommended Events &#x2192;</h2>
        <div className="wrapper" style={{ transform: `translateX(-${currentIndex * 7}%)` }}>
        {data.map((show,index) => <ShowCard key={index} show={show}/>)}
        </div>
    </div>
    </>
}
export default RecommendedShows


