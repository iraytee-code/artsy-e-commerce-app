import "./App.css";
import Home from "./pages/Home";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarketPlace from "./pages/MarketPlace";
import Auctions from "./pages/Auctions";
import { ContextProvider } from "./Context";

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/auctions" element={<Auctions />} />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
