import { createContext,useState, useEffect } from "react";
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/volkansenturk/turkiye-iller-ilceler/master/il.json`)
        .then((response) => setCities(response.data[2].data))
        .catch( error => console.log(error))
      },[]); 

      const values = {
          cities,
          setCities
      }

 return (
 <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
 );
}

export default WeatherContext;