import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./styles.css";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const optionValue = [
    { id: 1, gender: "female" },
    { id: 2, gender: "male" },
    { id: 3, gender: "other" }
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        {optionValue.map((el) => (
          <option value={el.gender} key={el.id}>
            {el.gender}
          </option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
