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
      <Navbar  className="shadow-sm fixed top-0  w-full z-50">
        <Navbar.Brand as={Link} to="/">
          <img src="" className="mr-3 h-6 sm:h-9" alt="" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            E-Shop
          </span>
        </Navbar.Brand>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/cart">
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

                {number > 0 &&  <span
                className={` w-4 h-4 p-[10px]   flex items-center justify-center content-center absolute right-[-3px] top-[-10px] text-gray-50 rounded-full bg-red-600 shadow-lg  font-semibold`}>{number}</span>}

            </div>
          </Link>
          {/*  //? if you want to change the icon you can wrap the toggle with relative div and add any icon then make the toggle opacity  */ }
          {/* <div className="relative flex items-center md:hidden ">
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg> */}
          <Navbar.Toggle   />
          {/* </div> */}
        </div>

        <Navbar.Collapse className="bg-gray-50 md:mt-0  md:p-0 mt-4 font-medium border border-gray-100 rounded-lg    md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
