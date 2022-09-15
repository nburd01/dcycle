import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");

  return (
    <form>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name"
        type="text"
        name="firstName"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;