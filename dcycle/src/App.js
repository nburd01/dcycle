import React,{useState, useEffect} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/api/genderize/:name") 
    .then(Response=>{
      if(Response){
          console.log(Response)
          setData(Response)

      }else{
          alert("not found")
      }
  })
  .then((response) => response.json())
}, [])

  // const dataRender = data.map((value, index) => 
  //   <div key={index}>
  //     <p>{value.name}</p>
  //     </div>
  // );


  return (
    <div className="App">
      {/* {(typeof data === 'undefined'
        ) ? (
          <p>Loading...</p>
        ) : ( */}
           {/* <ul>
          {data &&
            data.map(({ id }) => (
              <li key={id}>
                <h3>{id}</h3>
              </li>
            ))}
        </ul> */}
        {/* )} */}
        {/* <p>{dataRender}</p> */}
        {/* <p>{data}</p> */}
    </div>
  );
}

export default App;
