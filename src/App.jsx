import "./App.css";
import Home from "./pages/Home";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
