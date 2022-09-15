import React,{useState, useEffect} from 'react';
import './App.css';



function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("http://localhost:3200/api/genderize/:name")
      .then((response) => response.json())
      .then((actualData) => console.log("actualData",actualData))
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
    }, []);
   
    return(
        <div className="App">
             <h1>API Fetch</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
            <ul>
                {data &&
                data.map(({ name, gender }) => (
                    <li key={name.toString()}>
                        <h3>{gender.toString()}</h3>
                    </li>
                ))}
            </ul>
        </div>
    ) 
   }
export default App;