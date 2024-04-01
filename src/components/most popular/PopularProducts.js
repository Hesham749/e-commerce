import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function PopularProducts() {
  const products = useSelector((state) => state.products);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Most popular products
            </h1>
            
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="container grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2   gap-5">
            {/* card */}
            {products.slice(0,17).map((product, index) => {
              if (product.rating.rate >= 3.5) {
                return <Card product={product} key={index} />;
              }
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
