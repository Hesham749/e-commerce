import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";

export default function AllProducts() {
  const allProducts = useSelector((state) => state.products);
  return (
    <>
      <div className="container mt-40 mb-20 grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2   gap-5">

        {allProducts.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
