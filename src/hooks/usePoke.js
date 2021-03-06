import { useState, useEffect } from "react";

export default function usePoke(limit = 10, offset = 0) {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => setError(err + Date.now())) // Date to get a different error every time (only important to the error-modal)
      .finally(() => setIsFetching(false));
  }, [offset]);

  return { data, isFetching, error };
}
