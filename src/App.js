import './App.css';
import Container from './components/Container';
import {WeatherProvider} from './context/WeatherContext';

function App() {
  // const [city, setCity] = useState('İSTANBUL');
  // const [cityWeather, setCityWeather] = useState([]);
  // useEffect(()=>{
  //   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API_KEY}&lang=tr`)
  //   .then((r) => setCityWeather(r.data))
  // },[city])



  return (
    <WeatherProvider>
     <Container/>
    </WeatherProvider>
  );
}

export default App;
