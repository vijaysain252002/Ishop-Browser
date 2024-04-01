import React, { useState } from "react";
import {
  AiFillCaretDown,
  AiFillShopping,
  AiOutlineSearch,
  AiFillCloseCircle,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [MenuToggle, setMenuToggle] = useState(false);
  const ItemIcons = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: " STORE",
      link: "/",
    },
    {
      name: "IPHONE",
      link: "/",
    },
    {
      name: "IPAD",
      link: "/",
    },
    {
      name: "MACBOOK",
      link: "/",
    },
    {
      name: "ACCESORIES",
      link: "/",
    },
  ];

  return (
    <>
      <div fluid={true} extraclassName="shadow">
        <div>
          <div className="md:grid flex grid-cols-2 justify-between ">
            <div className="flex items-center gap-2">
              <span>EN </span>
              <AiFillCaretDown />
              <span>$ </span>
              <AiFillCaretDown />
            </div>

            <div className=" md:flex items-center gap-[15px] justify-end flex ">
              <RiAccountCircleLine className="text-[23px]" />
              <span className="">My Profile</span>
              <AiFillShopping className="text-[20px]" />
              <span>2 Items</span>
              <span className=" sm:block text-gray-400">$998 </span>
              <AiOutlineSearch className="text-[26px]" />
            </div>
          </div>
        </div>
      </div>
      <div extraclassName="pt-[20px] ">
        <div className="flex md:justify-center justify-between">
          <img className="" src="images/Home/iSHOP1.svg" alt="" />
          <GiHamburgerMenu
            onClick={() => setMenuToggle(true)}
            className="text-center text-[27px] md:hidden"
          />
        </div>
        <div>
          <ul
            className={`md:hidden bg-[rgba(0,0,0,0.7)] fixed top-0 h-[100vh] w-[100%]
             text-white text-center flex justify-center flex-col gap-6 first-letter duration-500 ${
               MenuToggle === true ? "left-[0%]" : "left-[-100%]"
             }`}
          >
            {ItemIcons.map((items, index) => {
              return (
                <li key={index}>
                  <a href={items.link}>{items.name}</a>
                </li>
              );
            })}
            <AiFillCloseCircle
              onClick={() => setMenuToggle(false)}
              className="text-[30px] absolute top-[60px] right-[-1px]"
            />
          </ul>
          <ul className=" hidden md:flex w-[100%] justify-center gap-4  py-[20px] ">
            {ItemIcons.map((items, index) => {
              return (
                <li key={index} className="hover:text-[#2E90E5]">
                  <a href={items.link}>{items.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
     
    </>
  );
}

export default Header;
