import "./App.css";
import Home from "./pages/Home";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarketPlace from "./pages/MarketPlace";
import { ContextProvider } from "./Context";

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
