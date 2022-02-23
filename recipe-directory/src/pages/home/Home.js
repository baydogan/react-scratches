import RecipeList from "../../components/RecipeList";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
export default function Home() {
  const [url, setURL] = useState("http://localhost:3000/recipes");
  const { data: recipes, error } = useFetch(url);
  return (
    <div>
      <h1>Home</h1>
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id}>
            <RecipeList recipe={recipe} />
          </div>
          
        ))}
        {error && <p>{error}</p>}
    </div>
  );
}
