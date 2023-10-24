import { useEffect, useState } from "react";

const useCallingTrending = (api) => {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendyMovies = async () => {
      try {
        const response = await fetch(api);
        const json = await response.json();
        setDataList(json.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getTrendyMovies();
  }, []);
  return [dataList, loading, error];
};

export default useCallingTrending;
