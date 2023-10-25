import { Link } from "react-router-dom";
import useCallingTrending from "../../hooks/useCallingTrending";
import Loading from "../Loading/Loading";
import Card from "react-bootstrap/Card";
import {} from "./Tv.css"
const Tv = () => {
  const [dataList, loading, error] = useCallingTrending(
    "https://api.themoviedb.org/3/tv/popular?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );
  return (
    <Loading loading={loading} error={error}>
      <div className="container py-5">
        <div className=" row g-5 py-3  ">
          {dataList.map((tv) => {
            return (
              <>
                <div className="col-md-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w185/${tv.poster_path}`}
                      title={tv.name}
                    />
                    <Card.Body className="cardHover py-4 tv__card ">
                      <Card.Title className="card__title fs-5">{tv.name}</Card.Title>
                      <Card.Text>
                        <span className="text-muted"> {tv.first_air_date}</span>
                      </Card.Text>

                      <Card.Text>
                      <span> Country :{" "}</span>
                      <span className="text-muted">{tv.origin_country}</span>
                      </Card.Text>
                      <button className="btn">
                    <Link to={`/tv/${tv.id}`}>
                      Show Details
                    </Link>
                  </button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </Loading>
  );
};

export default Tv;
