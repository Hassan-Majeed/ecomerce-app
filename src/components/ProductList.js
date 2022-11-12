import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext()
  console.log("useFilterContext", filterProducts);
  if (gridView === true) {
    return <GridView products={filterProducts} />
  } else {
    return <ListView products={filterProducts} />
  }

};

export default ProductList;
