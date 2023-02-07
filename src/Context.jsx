import React, { useEffect, useState } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const url =
    "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //Fetch products
    fetch(`${url}products.json`)
      .then((result) => result.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Add item to favorites

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
