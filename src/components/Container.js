import { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function Container(params) {
    const {cities} = useContext(WeatherContext)
    const handleChange = (e) => {
        // e.preventDefault();
        // setCity(e.target.value);
      } 
    return (
            <div>
                <select 
                    name="city_list" 
                    onChange={(e) => handleChange(e)}>
                        {
                        cities.sort((a,b) => a.name > b.name ? 1 : -1).map(city => (
                            <option key={city.id}>{city.name}</option>
                        ))
                        }
                </select>

            </div>
    )
}

export default Container;