import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [cookingTime, setCookingTime] = useState("");
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/recipes", {
        title: title,
        method: method,
        ingredients: [ingredients],
        cookingTime: cookingTime,
        id: Math.floor(Math.random() * 1000),
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      });
  };
  return (
    <div>
      <h2>CREATE</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          {title}
          Method:
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          ></textarea>
          Ingredients:
          <input type="text" onChange={(e) => setIngredients(e.target.value)} />
          Cook Time:
          <input type="number" onChange={(e) => setCookingTime(e.target.value)} />
          <button onClick={submitForm}>SUBMIT</button>
        </label>
      </form>
    </div>
  );
}
