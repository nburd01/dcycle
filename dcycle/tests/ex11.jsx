import React,{useState, useEffect} from 'react';
import './App.css';


export default function App() {
    const [genderize, setGenderize] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchgenderize = () => {
      fetch("http://localhost:3200/api/genderize/:name")
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
        <h2>Gender: {genderize?.gender}</h2>
        <h2>Probability: {genderize?.probability}</h2>
        <h2>Count: {genderize?.count}</h2>
      </div>
    );
}

  
