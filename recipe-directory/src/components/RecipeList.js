import "./RecipeList.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RecipeList({ recipe }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;

  return (
    <div className="recipe-list">
      <div className="card">
        <h3>{recipe.title}</h3>
        <p>{recipe.method}</p>
        <h3>Ingredients</h3>
        {recipe.ingredients.map((i) => (
          <p key={i}>{i}</p>
        ))}

      </div>
      
    </div>
  );
}
