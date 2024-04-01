import React from "react";
import Container from "../component/Container";
import Items from "./Items";

function Range() {
  return (
    <>
      
    
          <div className="flex gap-[15px]">
            <div className="w-[270px] h-[144px] shadow bg-[#F6F7F8] justify-center flex flex-col leading-[50px]">
              <div className="w-[80px] text-center">
                <h2>PRICES</h2>
              </div>
              <div className="flex justify-around text-center">
                <p>Ranger:</p>
                <p>$13.99 - $25.99</p>
              </div>

              <input
                type="range"
                min={0}
                max="100"
                value="40"
                className="range range-primary "
              />
            </div>
          </div>
        
         
      
    </>
  );
}

export default Range;
