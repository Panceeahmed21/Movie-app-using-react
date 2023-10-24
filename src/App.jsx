import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>

          <Router>
            <NavBar />

            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/home" element={<HomePage />}></Route>
            </Routes>
          </Router>
          <script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
    </>
  );
}

export default App;
