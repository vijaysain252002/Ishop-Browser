import React from "react";
import { AiFillStar } from "react-icons/ai";

function Bennear() {
  const products = [
    {
      name: "Apple Macbook Pro",
      img: "images/home/apple_macbook.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Pro",
      img: "images/home/Apple Macbook Air.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Air",
      img: "images/home/Apple iPhone 11.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Pro",
      img: "images/home/apple_macbook.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Pro",
      img: "images/home/Apple Macbook Air.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Air",
      img: "images/home/Apple Watch 21-1.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Pro",
      img: "images/home/Apple Macbook Air.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Air",
      img: "images/home/Apple iPhone 11.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
  ];

  const catgaray = [
    {
      Nama: "All",
    },
    {
      Nama: " Mac",
    },

    {
      Nama: "iPhone",
    },
    {
      Nama: "iPad",
    },

    {
      Nama: "iPod",
    },
    {
      Nama: "Accessories",
    },
  ];
  return (
    <div>
      <div>
        <div className="text-[30px] text-center my-4  grid-rows-2">BEST SELLER</div>
        <div>
          <ul className="flex justify-center gap-6 md:gap-20">
            {catgaray.map((cat, index) => {
              return (
                <li
                  className=" hover:text-[#33A0FF] cursor-pointer"
                  key={index}
                >
                  {cat.Nama}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center gap-[40px] ">
          {products.map((products, index) => {
            return <Productbox {...products} key={index} />;
          })}
        </div>
        <div className="flex justify-center my-[40px] text-[#33A0FF] cursor-pointer underline font-bold">
          <h2>LOAD MORE</h2>
        </div>
      </div>
    </div>
  );
}

export default Bennear;
const Productbox = (props) => {
  return (
    <div className="flex text-center leading-10 mt-[20px]">
      {/* <span className="absolute  bg-[#FF4858] text-white">
              {props.trading}
            </span> */}
      <div className="border py-[20px]">
        <img src={props.img} alt="" />

        <h2 className="text-center py-[20px]">{props.name}</h2>
        <div className="flex text-[#FFC600] justify-center">
          {props.star}
          {props.star}
          {props.star}
          {props.star}
        </div>
        <div className="flex gap-5 justify-center">
          <span className="text-[#FF4858] font-bold">{props.price}</span>
          <span className=" text-[#C1C8CE] ">
            <del>{props.discount}</del>
          </span>
        </div>
      </div>
    </div>
  );
};
