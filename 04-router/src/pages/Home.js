import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const { data: articles, isPending, error } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div> ...loading </div>}
      {error && <div> {error} </div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id}>
            <div className="card">
              <h3>{article.title}</h3> <p>{article.author}</p>
              <Link to={`/articles/${article.id}`}>Read More...</Link>
            </div>
          </div>
        ))}
    </div>
  );
}
