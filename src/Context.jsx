import React, { useEffect, useState } from "react";
const Context = React.createContext();
import baseUrl from "./config/config";

function ContextProvider({ children }) {
  const url = baseUrl.url;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${url}products.json`)
      .then((result) => result.json())
      .then((data) => setProducts(data.products));
  });

  return (
    <Context.Provider
      value={{
        products,
        url,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
