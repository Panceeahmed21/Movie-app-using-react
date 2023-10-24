import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/MovieDetails/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
      <script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin
      ></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin
      ></script>
    </>
  );
}

export default App;
