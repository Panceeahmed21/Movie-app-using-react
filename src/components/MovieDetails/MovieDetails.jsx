import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import useCaliingDetailsApi from "../../hooks/useCaliingDetailsApi";

const MovieDetails = () => {
  const { media, id } = useParams();
  const [movieDetails, loading, error] = useCaliingDetailsApi(media, id);
  return (
    <>
      <Loading loading={loading} error={error}>
        <div className="container py-5 my-2">
          <div className="row">
            <div className="col-md-6 w-50">
              <img
                className="w-75"
                src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">{movieDetails.original_title}</h2>
              <p className="text-muted">{movieDetails.overview}</p>
              <h5>
                Language :
                {movieDetails.original_language == "en" && (
                  <span className="text-muted fs-6"> English</span>
                )}
              </h5>

              {movieDetails.genres ? (
                <h5>
                  Genre :
                  {movieDetails.genres.map((ele) => {
                    return <span className="text-muted fs-6"> {ele.name}</span>;
                  })}
                </h5>
              ) : (
                "Not found"
              )}
              <h5>
                Status :{" "}
                <span className="text-muted fs-6"> {movieDetails.status}</span>
              </h5>
              <h5 className="my-2">Production Companies :</h5>

              <ul className="d-flex  justify-content-around align-items-center my-4 ">
                {movieDetails.production_companies
                  ? movieDetails.production_companies.map((ele) => {
                      return (
                        <li className="w-25 mx-2">
                          <img
                            src={`https://image.tmdb.org/t/p/w185/${ele.logo_path}`}
                            className="img-fluid"
                            alt=""
                            srcset=""
                          />
                        </li>
                      );
                    })
                  : "Not Found"}
              </ul>
            </div>
          </div>
        </div>
      </Loading>
    </>
  );
};

export default MovieDetails;
