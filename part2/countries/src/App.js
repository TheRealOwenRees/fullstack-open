import { useEffect, useState } from 'react';
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState([])

  const url = 'https://restcountries.com/v3.1/all'

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setAllCountries(data))
      .catch(err => console.log(err))
  }, [])
 
  return (
    <div className="App">
      <Search countryFilter={countryFilter} setCountryFilter={setCountryFilter} />
      <Results 
        allCountries={allCountries} 
        countryFilter={countryFilter}
        setCountryFilter={setCountryFilter} />
      
    </div>
  );
}

export default App;
