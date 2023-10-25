import { useEffect, useState } from "react";

const useCallingSearch = (inputValue) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CallingSearch = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${inputValue}`
        );
        const json = await response.json();
        setSearchData(json.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (inputValue) {
      CallingSearch();
    } else {
      setSearchData([]); 
    }
  }, [inputValue]);

  return [searchData, loading, error];
};

export default useCallingSearch;