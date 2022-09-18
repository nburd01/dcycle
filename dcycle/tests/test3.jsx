import React,{useState, useEffect} from 'react';
import './App.css';


export default function App() {
    const [genderize, setGenderize] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const fetchgenderize = () => {
      fetch("http://localhost:3200/api/nationalize/:name")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setGenderize(data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    };
  
    useEffect(() => fetchgenderize, []);
    console.log("fetchgenderize", fetchgenderize, [])
  
    if (loading) return <p>Data are loading...</p>;
    if (error) return <p>Error: {error.status}</p>;
  
    return (
      <div className="App">
        <h1>
          API Render
        </h1>
        <h2>Name: {genderize?.name}</h2>
        <ul>
            {countries.map((country, index) => (

                <li key={index}>
                    <p>{country?.country_id}</p>
                </li>

            ))}
        </ul>
      </div>
    );
}

  
