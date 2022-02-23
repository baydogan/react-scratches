import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data, error } = useFetch(url);
  return (
    <div>
      <h2>{data && data.title}</h2>
      <p>{ data &&  data.method}</p>
      {data &&  data.ingredients.map((i) => (
        <p key={i}>{i}</p>
      ))}
      <p>{data && data.cookingTime}</p>
    </div>
  );
}
