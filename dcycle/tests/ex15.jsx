import React,{useState, useEffect} from 'react';
// import Form from './ex14';
import './App.css';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'


export default function App() {
    const [genderize, setGenderize] = useState(null);
    const [nationalize, setNationalize] = useState(null);
    const [agify, setAgify] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('d');

    //------------------------------------------------------------
    const fetchgenderize = () => {
      fetch(`http://localhost:3200/api/genderize/${firstName}`)
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
      fetch(`http://localhost:3200/api/nationalize/${firstName}`)
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
      fetch(`http://localhost:3200/api/agify/${firstName}`)
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
    console.log("firstName",firstName)
    //------------------------------------------------------------
  
    useEffect(() => fetchgenderize, []);
    // console.log("fetchgenderize", fetchgenderize, [])
    // console.log("genderize",genderize)

    useEffect(() => fetchnationalize, []);
    // console.log("fetchnationalize", fetchnationalize, [])
    // console.log("nationalize",nationalize)

    useEffect(() => fetchagify, []);
    // console.log("fetchagify", fetchagify, [])
    // console.log("agify",agify)

    // const putGenderize = () => {
    //   axios.get(`https://api.genderize.io/?name=${firstName}`)
    //     console.log(firstName);
    //     setFirstName(firstName)
    // }
    if (loading) return <p>Data are loading...</p>;
    if (error) return <p>Error: {error.status}</p>;

    const putGenderize = () => {
      axios.get(`https://api.agify.io/?name=${firstName}`)
        console.log(firstName);
       
  }


    return (
      <div className="main">
        <h1 className="main-header">
          API Render for the name {firstName}
        </h1>
        {(`${firstName}` === '')
        ?
         <div className="create-form">
          <div>
              <Form className="create-form">
                  <Form.Field>
                      <label>First Name</label>
                      <input placeholder='Name' onChange={(e) => setFirstName(e.target.value)}/>
                  </Form.Field>
                  <Button  type='submit'>Submit</Button>
              </Form>
          </div>
        </div>
        : 
        (
        <div>
        <h2>Genderize</h2>
        <h3>Name: {genderize?.name}</h3>
        <h3>Gender: {genderize?.gender}</h3>
        <h3>Probability: {genderize?.probability}</h3>
        <h3>Count: {genderize?.count}</h3>

        <h2>Nationalize</h2>

        {/* <ul>
            {nationalize.country.map((country, index) => (

                <li key={index}>
                    <p>{country?.country_id}</p>
                    <p>{country?.probability}</p>
                </li>
            ))}
        </ul> */}
        <h2>Agify</h2>
                <h3>Age: {agify?.age}</h3>
                <h3>Count: {agify?.count}</h3>

        <div className="create-form">
          <div>
              <Form className="create-form">
                  <Form.Field>
                      <label>First Name</label>
                      <input placeholder='Name' onChange={(e) => setFirstName(e.target.value)}/>
                  </Form.Field>
                  <Button onClick={putGenderize} type='submit'>Submit</Button>
              </Form>
          </div>
        </div>
        </div>)}
      </div>
    );
}

  
