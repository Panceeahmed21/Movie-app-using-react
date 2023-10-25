import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import useCallingTrending from "../../hooks/useCallingTrending";
import {} from "./TrendingMovies.css";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const TrendingMovies = ({ selectedOption }) => {
  const [dataList, loading, error] = useCallingTrending(
    `https://api.themoviedb.org/3/${selectedOption}/popular?api_key=14bdd69ce887376edfafb09f23f78fe9`
  )
  

  return (
    <Loading loading={loading} error={error}>
      {dataList.map((movie) => {
        return (
          <>
            <div className="col-md-4 ">
              <Card className="trending__card">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                />
                <Card.Body className="cardBody">
                  <Card.Title className="card__title">{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.overview.split(" ").slice(0, 10).join(" ")}...
                  </Card.Text>
                  <button className="btn">
                    <Link to={`/${movie.media_type}/${movie.id}`}>
                      Show Details
                    </Link>
                  </button>
                </Card.Body>
              </Card>
            </div>
          </>
        );
      })}
    </Loading>
  );
};
export default TrendingMovies;
