import React from "react";
import Container from "./Container";

function Feq() {
  return (
    <div className=" h-[350px] flex justify-center items-center ">
      <Container>
        <div className="flex h-[100%]">
          <div className="w-[70%]">
            <img className="py-[40px]" src="images/Home/ishop.svg" alt="" />
            <h2 className="w-[72%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </h2>
          </div>
          <div>
            <h2 className="font-bold py-[40px]">Follow Us</h2>
            <h3 className="w-[81%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </h3>
            <div className="flex pt-[20px] gap-[60px] cursor-pointer">
              <img src="images/Home/facebook.svg" alt="" />
              <img src="images/Home/twitter.svg" alt="" />
            </div>
          </div>
          <div className="w-[30%]">
            <h2 className="font-bold py-[40px]">Contact Us</h2>
            <h2>
              iShop: address @building 124 Call us now: 0123-456-789 Email:
              support@whatever.com
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Feq;
