import { useEffect, useState } from "react";

const useCaliingDetailsApi = (media, id) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${media}/${id}?api_key=14bdd69ce887376edfafb09f23f78fe9`
        );
        const json = await response.json();
        setMovieDetails(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getMovieDetails();
  }, []);
  return [movieDetails, loading, error];
};

export default useCaliingDetailsApi;
