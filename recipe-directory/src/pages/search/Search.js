import { useLocation } from "react-router-dom"
import useFetch from "../../hooks/useFetch";
export default function Search(){
    const queryString = new URLSearchParams(useLocation().search);
    const query = queryString.get("q");

    const url = "http://localhost:3000/recipes?q=" + query;
    const { data: recipes, error } = useFetch(url);
    return (
        <div>
            <h3>Recipes including {query}</h3>
        </div>
    )
}