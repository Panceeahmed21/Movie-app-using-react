import { Link } from "react-router-dom";
import useCallingTrending from "../../hooks/useCallingTrending";
import Card from "react-bootstrap/Card";
import Loading from "../Loading/Loading";
import {} from "./TrendingMovies.css";
import useCallingSearch from "../../hooks/useCallingSearch";
import imgNotFound from "../../assets/Image_not_available .png";

const TrendingMovies = ({ selectedOption, inputValue }) => {
  const [dataList, loading, error] = useCallingTrending(
    `https://api.themoviedb.org/3/${selectedOption}/popular?api_key=14bdd69ce887376edfafb09f23f78fe9`
  );
  const [searchData] = useCallingSearch(inputValue);

  return (
    <Loading loading={loading} error={error}>
      {inputValue ? (
        searchData && searchData.length > 0 ? (
          searchData.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <Card className="trending__card ">
                <Card.Img
                  variant="top"
                  src={
                    `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                      ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
                      : { imgNotFound }
                  }
                  title={movie.title}
                />
                <Card.Body className="cardBody py-2">
                  <Card.Title className="card__title">{movie.name}</Card.Title>

                  <Card.Title className="card__title">{movie.title}</Card.Title>
                  <Card.Text>
                    {movie.overview
                      ? movie.overview.split(" ").slice(0, 10).join(" ")
                      : ""}
                    ...
                  </Card.Text>
                  <button className="btn">
                    <Link to={`/${selectedOption}/${movie.id}`}>
                      Show Details
                    </Link>
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <p>No search results found.</p>
        )
      ) : (
        dataList.map((movie) => (
          <div className="col-md-4" key={movie.id}>
            <Card className="trending__card border-0">
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                title={movie.title}
              />
              <Card.Body className="cardBody ">
                <Card.Title className="card__title">{movie.title}</Card.Title>
                <Card.Text>
                  {movie.overview.split(" ").slice(0, 10).join(" ")}...
                </Card.Text>
                <button className="btn">
                  <Link to={`/${selectedOption}/${movie.id}`}>
                    Show Details
                  </Link>
                </button>
              </Card.Body>
            </Card>
          </div>
        ))
      )}
    </Loading>
  );
};

export default TrendingMovies;
