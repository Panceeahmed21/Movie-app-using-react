import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import TrendingMovies from "../TarendingMovies/TrendingMovies";
import FormSelect from "react-bootstrap/FormSelect";
import {} from "./HomePage.css";

const HomePage = () => {
  const [selectedOption, setSelectedOption] = useState("movie");
  const [inputValue, setInputValue] = useState("");

  const onChangeOption = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
  };
  const inputRef = useRef(null);
  const getInputValue = () => {
    const inputValue = inputRef.current.value;

    setInputValue(inputValue.toLowerCase());
  };

  useEffect(() => {
    getInputValue();
  }, [inputValue]);

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
        <div className="row ">
          <div className="col-md-12 py-5">
            <h2 className="mb-3">What do you want to watch?</h2>
            <div className="d-flex justify-content-between align-items-center ">
              <div className="col-md-7">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    ref={inputRef}
                    onChange={getInputValue}
                  />
                  <button className="btn btn-primary" onClick={getInputValue}>Search</button>
                </div>
              </div>
              <div className="col-md-2">
                <Form.Select
                  aria-label="Media Type"
                  onChange={onChangeOption}
                  value={selectedOption}
                >
                  <option value="movie">Movies</option>
                  <option value="tv">TVs</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-5 py-3 px-5 d-flex justify-content-center ">
          <h4>Trending Movies & Tvs </h4>

          <TrendingMovies
            inputValue={inputValue}
            selectedOption={selectedOption}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
