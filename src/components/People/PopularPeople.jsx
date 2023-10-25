import useCallingTrending from "../../hooks/useCallingTrending";
import Loading from "../Loading/Loading";
import Card from "react-bootstrap/Card";
import {} from "./PopularPeople.css"
const PopularPeople = () => {
  const [dataList, loading, error] = useCallingTrending(
    "https://api.themoviedb.org/3/trending/person/week?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );
  return (
    <Loading loading={loading} error={error}>
      <div className="container">
        <h2 className="py-4">Popular People</h2>
        <div className=" row g-5 py-3  ">
          {dataList.map((person) => {
            return (
              <>
                <div className="col-md-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w185/${person.profile_path}`}
                      title={person.name}
                    />
                    <Card.Body className="cardHover">
                      <Card.Title className="card__title">{person.name}</Card.Title>
                      <Card.Text>
                      <span className="text-muted">  {person.gender == 1 ? "Female" : "Male"}</span>
                      </Card.Text>
                      <Card.Text>
                      <span className="text-muted">  {person.known_for_department}</span>
                      </Card.Text>
                      <Card.Text>
                       
                        <ul className="d-flex  justify-content-around align-items-center my-4">
                          {person.known_for
                            ? person.known_for.map((ele) => {
                                return (
                                  <li className="w-25">
                                    <img
                                      src={`https://image.tmdb.org/t/p/w185/${ele.poster_path}`}
                                      className="img-fluid "
                                      title={ele.title}
                                      srcset=""
                                    />
                                  </li>
                                );
                              })
                            : "Not Found"}
                        </ul>
                      </Card.Text>
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

export default PopularPeople;
