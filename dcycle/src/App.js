import React,{useState, useEffect} from 'react';
import Form from './ex14';
import './App.css';


export default function App() {
    const [genderize, setGenderize] = useState(null);
    const [nationalize, setNationalize] = useState(null);
    const [agify, setAgify] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //------------------------------------------------------------
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
    //------------------------------------------------------------

    const fetchnationalize = () => {
      fetch("http://localhost:3200/api/nationalize/:name")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setNationalize(data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    };
    //------------------------------------------------------------

    const fetchagify = () => {
      fetch("http://localhost:3200/api/agify/:name")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setAgify(data);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
    };
    //------------------------------------------------------------
  
    useEffect(() => fetchgenderize, []);
    console.log("fetchgenderize", fetchgenderize, [])
    console.log("genderize",genderize)

    useEffect(() => fetchnationalize, []);
    console.log("fetchnationalize", fetchnationalize, [])
    console.log("nationalize",nationalize)

    useEffect(() => fetchagify, []);
    console.log("fetchagify", fetchagify, [])
    console.log("agify",agify)

    
  
    if (loading) return <p>Data are loading...</p>;
    if (error) return <p>Error: {error.status}</p>;

    return (
      <div className="App">
        <h1>
          API Render for the name {nationalize?.name}
        </h1>
        <h2>Genderize</h2>
        <h3>Name: {genderize?.name}</h3>
        <h3>Gender: {genderize?.gender}</h3>
        <h3>Probability: {genderize?.probability}</h3>
        <h3>Count: {genderize?.count}</h3>

        <h2>Nationalize</h2>

        <ul>
            {nationalize.country.map((country, index) => (

                <li key={index}>
                    <p>{country?.country_id}</p>
                    <p>{country?.probability}</p>
                </li>
            ))}
        </ul>
        <h2>Agify</h2>
                <h3>Age: {agify?.age}</h3>
                <h3>Count: {agify?.count}</h3>


        <Form/>
      </div>
    );
}

  
