import React, { useState } from "react";

const Navbar = () => {
  const navLink = [
    { name: "Host your home", link: "/" },
    { name: "Host your experience", link: "/" },
    { name: "Help", link: "/" },
    { name: "Log in", link: "/" },
  ];
  //   state declear
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div
        className="
      md:flex items-center justify-between bg-white py-4 md:px-10 px-7"
      >
        <div className=" font-bold text-3xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl mr-2 pt-2 text-emerald-400 ">
            <ion-icon name="bed-outline"></ion-icon>
          </span>
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-500 to-lime-500 ">
            Aircnc
          </span>
        </div>
        <div className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden">
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "menu"}
          ></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:mb-0 mb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-400px] opacity-0 md:opacity-100 "
          }`}
        >
          {navLink.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg font-semibold md:my-0 my-7"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-gradient-to-r from-emerald-500 to-lime-500 text-lg text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:opacity-90 duration-500">
            Sign up
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
