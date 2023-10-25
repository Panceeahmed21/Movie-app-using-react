import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PopularPeople from "./components/People/PopularPeople";
import Tv from "./components/Tv/Tv";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/:media/:id" element={<MovieDetails />}></Route>
          <Route path="/people" element={<PopularPeople />}></Route>
          <Route path="/tv" element={<Tv />}></Route>
          <Route path="/*" element={< NotFound/>}></Route>



        </Routes>
      </Router>
      <Footer></Footer>

    
    </>
  );
}

export default App;
