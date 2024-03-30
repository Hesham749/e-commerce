import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQuantity, increaseQuantity, removeItem } from "../../rtk/slices/CartSlice";

export default function Cart() {
  const CartItems = useSelector((state) => state.Cart);
  const subTotal = CartItems.reduce((total, current) => {
    total += current.price * current.quantity;
    return total;
  }, 0);
  const dispatch = useDispatch();
  if (CartItems.length === 0) {
    return (
      <div className="min-h-[76vh] pt-20 text-center content-center">
        <h1 className="text-3xl  lg:text-6xl">cart is empty</h1>
      </div>
    );
  }
  return (
    <div>
      <div className=" bg-gray-100 pt-20 mt-10 min-h-[72vh]">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Cart Items {CartItems.length}
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {CartItems.map((product) => {
              return (
                <div
                  key={product.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                  <img
                    src={product.image}
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40 h-[100px] object-contain"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.title.split(" ").slice(0, 3).join(" ")}
                      </h2>
                      <p
                        className="mt-1 text-xs text-gray-700 cursor-pointer hover:text-red-600"
                        onClick={() => dispatch(removeItem(product))}>
                        Remove
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => {if(product.quantity>1){dispatch(decreaseQuantity(product))}else dispatch(removeItem(product))}}>
                          {" "}
                          -{" "}
                        </span>

                        <span className="h-8 w-10 border border-gray-300 content-center bg-white text-center text-xs outline-none">{product.quantity}</span>

                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"onClick={() => dispatch(increaseQuantity(product))}>
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex t   items-start   flex-col">
                        <p className="text-sm">Price : {product.price} $</p>
                        <p className="text-sm">
                          Total : {(product.price * product.quantity).toFixed(2)} $
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <!-- Sub total --> */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${(subTotal + 4.99).toFixed(2)} USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
