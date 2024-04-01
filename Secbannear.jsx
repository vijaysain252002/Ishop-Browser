import React from "react";
import Container from "./Container";

function Secbannear() {
  return (
    <Container fluid={true}>
      <div className="w-[full] h-[500px] bg-[#2E90E5] relative text-[#FFFFFF]">
        <div className="flex justify-center flex-col items-center  leading-[90px] h-[600px] w-[60%]">
            <Container>
                
            <h2 className="text-[66px]" >iPhone 6 Plus</h2>
          <p className="text-[24px]">Performance and design. Taken right to the edge.</p>
          <span className=" underline text-[17px] cursor-pointer">SHOP NOW</span>

            </Container>
          
          <div className="flex justify-end">
            <img src="images/Home/iphone.png" className="w-[35%] absolute right-0 bottom-[0px] bg-cover" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Secbannear;
