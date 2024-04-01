import React from "react";
import Container from "../component/Container";
import Storeleft from "./Storeleft";
import Items from "./Items";

function Store8() {
  return (
    <div>
      <Container>
       

            <div className="w-[full] h-[340px] bg-[#2E90E5] relative text-[#FFFFFF]">
              <div className="flex justify-center flex-col items-center  leading-[50px] h-[340pxpx] w-[60%]">
                <Container
                  fluid={true}
                  extraclassName="h-[380px] flex flex-col justify-center pl-[50px]"
                >
                  <h2 className="text-[42px]">iPhone 8</h2>
                  <p className="text-[16px]">
                    Performance and design. Taken right to the edge.
                  </p>
                  <span className="  text-[17px] cursor-pointer">SHOP NOW</span>
                  <hr className="w-[93px]" />
                </Container>

                <div className="flex justify-end">
                  <img
                    src="images/Home/iphone.png"
                    className="w-[35%] absolute  h-[350px] right-0 bottom-[0px] bg-cover"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <Items />
         
      </Container>
    </div>
  );
}

export default Store8;
