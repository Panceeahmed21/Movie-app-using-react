import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TrendingMovies from "../TarendingMovies/TrendingMovies";
import {} from "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <header className="header ">
        <div className="bg-color d-flex justify-content-center">
          <div className="container w-50 ms-0 px-5 d-flex align-items-center ">
            <h1 className="">Unlimited movies, TV shows, and more</h1>
          </div>
        </div>
      </header>

      <div className="container py-5">
        <div className="row gy-5 py-3 px-5 d-flex justify-content-center ">
          <div className="row ">
            <div className="col-md-8 py-5">
              <h2 className="mb-3">What do you want to watch?</h2>
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
          <TrendingMovies />
        </div>
      </div>
    </>
  );
};

export default HomePage;
