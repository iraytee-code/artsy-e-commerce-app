import "./App.css";
import Home from "./pages/Home";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MarketPlace from "./pages/MarketPlace";
import Auctions from "./pages/Auctions";
import Drop from "./pages/Drop";
import ProductItem from "./pages/ProductItem";
import { ContextProvider } from "./Context";
import Cart from "./pages/Cart";
import CartShippingDetails from "./pages/CartShippingDetails";
import PaymentCheckout from "./pages/PaymentCheckout";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Fragment>
      <ContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/marketplace/:productId" element={<ProductItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping-details" element={<CartShippingDetails />} />
          <Route path="/checkout" element={<PaymentCheckout />} />
          <Route path="/checkout-success" element={<Confirmation />} />
        </Routes>
      </ContextProvider>
    </Fragment>
  );
}

export default App;
