import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        console.log(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);
  return { data, error };
};

export default useFetch;
