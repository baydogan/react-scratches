import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setDate] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setPending(false);
        setDate(json);
        setError(null);
      } catch (err) {
        if (err.name == "AbortError") {
          console.log("the fetch was aborted");
        } else {
          setPending(false);
          setError(err.message);
          console.log(err.message);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
