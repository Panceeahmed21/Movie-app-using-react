import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TrendingMovies from "../TarendingMovies/TrendingMovies";
const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="my-3">Welcome to our website!</h1>

        <div className="row py-2">
          <div className="col-md-8 m-auto">
            <InputGroup size="md">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Text id="inputGroup-sizing-lg">
                <button className="btn">Search</button>
              </InputGroup.Text>
            </InputGroup>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-md-3">
          <TrendingMovies/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
