import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Article() {
    // const {id} = useParams()
  //   const url = "http://localhost:3000/articles/1" + id;
  //   const { data: article, isPending, error } = useFetch(url);

  return (
    <div>
      {/* <div>
        {isPending && <div>...loading </div>}
        {error && <div> error </div>}
        {article && (
          <div>
            <h2>{article.title}</h2>
            <p>Author: {article.author}</p>
          </div>
        )}
      </div> */}
    </div>
  );
}
