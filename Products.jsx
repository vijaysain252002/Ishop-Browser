import React from "react";
import Container from "../component/Container";
import { AiFillStar } from "react-icons/ai";
import Color from "./Color";
import Store8 from "./Store8";
import Range from "./Range";
import Header from "../component/Header";
import Storeleft from "./Storeleft";
import Feq from "../component/Feq";
import Footear from "../component/Footear";
import Brand from "./Brand";
import More from "./More";

function Products() {
  const products = [
    {
      name: "Apple Ipod",
      img: "images/home/apple_iPod_2A.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
    {
      name: "Apple Macbook Pro",
      img: "images/home/Apple Watch 21-1.png",
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
    {
      name: "Apple Macbook Air",
      img: "images/home/Apple Watch 21-1.png",
      price: "$499",
      discount: "$599",
      star: <AiFillStar />,
      trading: "HOT",
    },
  ];
  return (
    <>
      <Header />
      <Container>
        <div className=" grid grid-cols-4">
          <div className="  col-span-1 ">
            <div className="flex flex-col gap-8">
              <Storeleft />
              <Range />
              <Color />
              <Brand />
              <More />
            </div>
          </div>
          <div className=" col-span-3">
            <Store8 />
            <div className=" ">
              <div>
                <div className=" justify-center gap-[40px] flex flex-wrap ">
                  {products.map((products, index) => {
                    return <Productbox {...products} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feq />
        <Footear />
      </Container>
    </>
  );
}

export default Products;
const Productbox = (props) => {
  return (
    <div className="w-[270px] h-[349px] border flex flex-wrap justify-center items-center">
      <div className="w-[236px] h-[153px]">
        <img src={props.img} alt="" />
      </div>
      <div className="text-[#262626] ">
        <div className="flex justify-center flex-col py-[30px]">
          <h2>{props.name}</h2>
        </div>
        <div className="text-[#FFC600]">
          <div className="flex gap-2">
            {props.star}
            {props.star}
            {props.star}
            {props.star}
          </div>
        </div>
        <div className="flex gap-4 py-2 ">
          <div className="text-[#FF4858]">
            <h2>{props.price}</h2>
          </div>
          <div className="text-[#C1C8CE]">
            <del>
              <h2>{props.discount}</h2>
            </del>
          </div>
        </div>
      </div>
    </div>
  );
};
