import React,{useState, useEffect} from 'react';
// import Form from './ex14';
import './App.css';
import axios from 'axios';



export default function App() {
    
  const [agify, setAgify] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const initialFormData = Object.freeze({
    firstName: "niall ",
  });
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("handleSubmit",formData);
    // ... submit to API or something
    updateFormData(formData)
    console.log("update",formData)
  };



    //------------------------------------------------------------

    const fetchagify = () => {
      fetch(`https://api.agify.io/?name=${formData.firstName}`)
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
    // console.log("firstName",firstName)
    //------------------------------------------------------------
    
    
    useEffect(() => fetchagify, []);
    
    if (loading) return <p>Data are loading...</p>;
    if (error) return <p>Error: {error.status}</p>;

    const putGenderize = () => {
      axios.get(`https://api.agify.io/?name=${formData.firstName}`)
        console.log("putGenderize",formData.firstName);
      }
      

    //------------------------------------------------------------
  return (
    <>

<label>
firstName
  <input name="firstName" onChange={handleChange} />
</label>
<br />
<button onClick={handleSubmit}>Submit</button>
<div>
<p>{formData.firstName}</p>
<p>{agify.name}</p>
<p>{agify.age}</p>
  </div>
    </>
  );
};


  
