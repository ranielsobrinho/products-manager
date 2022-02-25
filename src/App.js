import React, { useEffect } from "react";
import "./App.css";
import { Api } from "./services/Api";
import Navbar from "./components/Navbar";
import ProductsTable from "./components/ProductsTable";

function App() {
  useEffect(() => {
    Api.get("/products")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  });
  return (
    <div>
      <Navbar />
      <ProductsTable />
    </div>
  );
}

export default App;
