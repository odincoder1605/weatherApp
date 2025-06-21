import { useEffect, useState } from 'react'
import styles from './search.module.css'


export default function Search({setData,setIsLoading}){
    const [city, setCity] = useState("London");
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey);
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    useEffect(()=>{
        async function fetchWeather(){
            const res = await fetch(URL);
            const data = await res.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
        }
        fetchWeather();
    },[city]);
    return(
        <div className={styles.search}>
            <input className={styles.input} type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
        </div>
    )
}