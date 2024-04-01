import React from "react";
import Container from "./Container";

function Support() {
  return (
    <Container extraclassName="w-[100%]">
      <div className="flex items-center h-[500px]">
        <div className=" w-[100%] text-center ">
          <div className="w-[100%] h-[50px] flex justify-center items-center">
            <img src="images/Home/shipping.svg" alt="" />
          </div>
          <h2 className="py-[20px] font-bold">FREE SHIPPING</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
        <div className="w-[100%] text-center ">
          <div className="w-[100%]  h-[50px] flex justify-center">
            <img src="images/Home/refund.svg" alt="" />
          </div>
          <h2 className="py-[20px] font-bold">100% REFUND</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
        <div className="  w-[100%] text-center ">
          <div className="w-[100%] h-[50px] flex justify-center">
            <img src="images/Home/support.svg" alt="" />
          </div>
          <h2 className="py-[20px] font-bold">SUPPORT 24/7</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Support;
