// import React, { useState } from 'react';
// import axios from 'axios';
// // import { Button, Form } from 'semantic-ui-react'
// // import 'semantic-ui-css/semantic.min.css'


// export default function Create() {
//     const [name, setName] = useState('');
//     // const postData = () => {
//     //     console.log(firstName);
//     //     console.log(lastName);
//     //     console.log(checkbox);
//     // }
//     const putGenderize = () => {
//       axios.get(`https://api.agify.io/?name=${name}`)
//         console.log(name);
//         setName(name)
//   }
    
//     return (
//         <div>
//             <Form className="create-form">
//                 <Form.Field>
//                     <label>First Name</label>
//                     <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
//                 </Form.Field>
//                 <Button onClick={putGenderize} type='submit'>Submit</Button>
//             </Form>
//         </div>
//     )
// }