import React,{useState, useEffect} from 'react';
// import Form from './ex14';
import './App.css';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import { useForm } from "react-hook-form";


export default function App() {
    const [genderize, setGenderize] = useState(null);
    const [nationalize, setNationalize] = useState(null);
    const [agify, setAgify] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('Niall');
    const { register, handleSubmit } = useForm();
    const onError = (errors, e) => console.log(errors, e);


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
    
    
    useEffect(() => fetchagify, []);
    
    if (loading) return <p>Data are loading...</p>;
    if (error) return <p>Error: {error.status}</p>;

    const putGenderize = () => {
      axios.get(`https://api.agify.io/?name=${firstName}`)
        console.log("firstName",firstName);
      }
      

    //------------------------------------------------------------

    const onSubmit = (data, event) => {
      // e.preventDefault();
      console.log("data",data)
      console.log("event",event)

    }


    //------------------------------------------------------------

    return (
      <div className="main">
        <h1 className="main-header">
          API Render for the name {firstName}
        </h1>

        <h2>Agify</h2>
                <h3>Name: {agify?.name}</h3>
                <h3>Age: {agify?.age}</h3>
                <h3>Count: {agify?.count}</h3>

        <div className="create-form">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <input {...register("firstName")} />
            <button onClick={putGenderize}  type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
}

  
