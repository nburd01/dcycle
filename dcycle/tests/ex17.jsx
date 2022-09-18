import "./App.css";
import { useState } from "react";
import axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3200/api/agify/?name=${name}`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMobileNumber("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const putGenderize = () => {
    axios.get(`https://api.agify.io/?name=${name}`)
      console.log("firstName",name);
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={putGenderize} type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
      <div>
       <p>
         {name}
        </p>
      </div>
    </div>
  );
}

export default App;
