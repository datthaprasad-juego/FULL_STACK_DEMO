import { useEffect, useState } from "react";
import fetch from "./fetch";

const useFetch = (url, method, input) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await fetch(url, method, input);
      if (data) setData(data);
      if (error) setError(error);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading, error };
};

export default useFetch;
