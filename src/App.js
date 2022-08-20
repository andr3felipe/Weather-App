import React, {useState} from "react";
import axios from "axios";
import Display from "./components/Display";


const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d2a2a30ebfcdc406aad89e5322dedf46&units=metric`

  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then(response => {
        setData(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        type="text" 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        />
      </div>
      <Display 
      data={data}
      />
    </div>
  );
}

export default App;
