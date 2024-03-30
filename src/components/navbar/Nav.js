import { Navbar } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

export default function Nav2() {
  const nav = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const cart = useSelector((state) => state.Cart);
  const number = cart.length?.toString();
  return (
    <div>
      <Navbar className="shadow-sm fixed top-0  w-full z-50">
        <Navbar.Brand as={Link} to="/">
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-Shop
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/cart" >
          <div className="relative">
            <svg
              className="w-[40px] h-[40px] text-gray-800 dark:text-white cursor-pointer  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.3"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
            <span
              className={`   absolute right-0 top-[-13px] text-red-600 shadow-lg  font-bold`}>
              {number > 0 && number}
            </span>
          </div>
          </Link>

          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <div className=" md:flex md:flex-row md:space-x-8 md:mt-0  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50   md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {nav.map((item, index) => {
              return (
                <Navbar.Link
                  key={index}
                  className=" block py-2 px-3   rounded md:bg-transparent text-gray-800 md:p-0 md:dark:text-blue-500 hover:text-blue-700"
                  as={NavLink}
                  to={item.path}>
                  {item.name}
                </Navbar.Link>
              );
            })}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
