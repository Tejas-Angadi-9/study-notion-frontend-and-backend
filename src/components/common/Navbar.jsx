import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { useSelector } from "react-redux";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/api";

//* Creating dummy data for testing purpose

const Navbar = () => {
  //* Get the data from the redux state management to check if the user is logged-in/signed-up or not
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  // * For the API call we will use the function in useEffect hook
  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async () => {
    try {
      const response = await apiConnector("GET", categories.CATEGORIES_API);
      setSubLinks(response.data.data);
      // console.log("Response: ", response);
    } catch (err) {
      console.log("Failed to fetch the sub links from the backend");
    }
  };

  useEffect(() => {
    fetchSubLinks();
  }, []);

  console.log("subLinks: ", subLinks);

  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 z-10">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between border-white h-full">
        {/* //* Logo part */}
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo.png"
              width={160}
              height={42}
              loading="lazy"
            />
          </Link>
        </div>
        {/*  Nav Links //TODO: Catalog part is pending*/}
        <nav>
          <ul className=" border-white flex text-richblack-5 gap-x-6">
            {NavbarLinks.map((el, index) => {
              return (
                <li key={index}>
                  {el.title === "Catalog" ? (
                    <div className="flex items-center gap-1 relative group cursor-pointer">
                      <p className=" text-richblack-25">{el.title} </p>
                      <IoIosArrowDropdownCircle />
                      {/* //* drop down menu on hovering the catalog */}
                      <div className="invisible absolute top-0 left-[50%] translate-x-[-50%] translate-y-[22%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-10">
                        {/* Now will be creating the diamond shape on the rectangle white attached to it by creating a rectangle and then rotate it by 45 to get the diamond. As we use absolute we just the upper diamond i.e a triangle*/}
                        <div className="absolute left-[50%] translate-x-[80%] translate-y-[-50%] top-0 h-6 w-6 rotate-45 bg-richblack-5"></div>
                        {/* Show the sublinks */}
                        {subLinks.length > 0 ? (
                          subLinks.map((subLink, index) => (
                            <Link
                              to={`${subLink.name}`}
                              key={index}
                              className="w-full items-center flex text-lg text-richblack-900 hover:bg-richblack-50 transition-all duration-200 p-2 rounded-md">
                              <p>{subLink.name}</p>
                            </Link>
                          ))
                        ) : (
                          <div>No sub-links found</div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link to={el?.path}>
                      <p
                        className={`${
                          selectedTab === el.title
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                        onClick={() => {
                          setSelectedTab(el.title);
                        }}>
                        {el?.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* //* Login & Signup section */}
        <div className="py-2 h-full flex gap-x-4 w-fit">
          {/* //* If user is found then check if the user is not an instructor. As this cart feature is only visible for the students to buy the course */}
          {user && user?.accountType != "Instructor" && (
            <Link
              to={"/dashboard/cart"}
              className="relative flex items-center mr-5">
              <AiOutlineShoppingCart className="text-white text-[30px]" />
              {/* Showing the cart items and setting to absoulte as it be over the cart icon */}
              {totalItems > 0 && (
                <div className="text-white absolute -top-1 left-4  bg-caribbeangreen-300 px-2 rounded-full flex items-center justify-center">
                  {totalItems}
                </div>
              )}
            </Link>
          )}
          {/* //* If the user is not logged in*/}
          {token == null && (
            <Link to={"/login"}>
              <button className="border border-richblue-700 bg-richblue-800 px-[12px] py-[8px] text-richblack-100 rounded-md transition-all duration-200 hover:scale-95">
                Login
              </button>
            </Link>
          )}
          {token == null && (
            <Link to={"/signup"}>
              <button className="border border-richblue-700 bg-richblue-800 px-[12px] py-[8px] text-richblack-100 rounded-md transition-all duration-200 hover:scale-95">
                Sign Up
              </button>
            </Link>
          )}
          {/* //* If the user is logged in then show the cart, search icon & profileDropDown */}
          {token != null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
