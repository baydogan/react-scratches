import "./App.css";
import { useState, useReducer } from "react";
import {reducer} from "./reducer";

function App() {
  // const [url, setUrl] = useState("");
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  const initialState = {
    url: "",
    error: null,
    loading: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const { url, error, loading } = state;

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });
    // setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        // setLoading(false);
        // setUrl(res.message);
        dispatch({ type: "FETCH_SUCCESS", payload: res.message });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILURE", payload: "Error" });
        // setLoading(false);
        // setError(err.message);
      });
  };

  return (
    <div className="App">
      <button onClick={fetchData} disabled={loading}>
        Fetch URL
      </button>
      <div>
        <img src={url} alt="" />
        {error}
      </div>
    </div>
  );
}

export default App;
