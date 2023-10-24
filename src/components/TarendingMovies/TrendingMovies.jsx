import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import useCallingTrending from "../../hooks/useCallingTrending";
import {} from "./TrendingMovies.css";

const TrendingMovies = () => {
  const [dataList, loading, error] = useCallingTrending(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );

  return (
    <>
      {dataList.map((movie) => {
        return (
          <>
            <div className="col-md-4 ">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
                <Card.Body className="cardBody">
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.overview.split(" ").slice(0, 10).join(" ")}...
                  </Card.Text>
                  <button className="btn">
                    <Link to={`/MovieDetails/${movie.id}`}>Show Details</Link>
                  </button>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </>
  );
};
export default TrendingMovies;
