import React, {useState} from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);
  const [name, setName] = useState("");
  

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register("name")} />
      <button type="submit">Submit</button>
    </form>
  );
}