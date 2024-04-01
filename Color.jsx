import React from 'react'
import Container from '../component/Container'

function Color() {
  return (
    <div>
      <Container>
      <div className="w-[270px] h-[100px] shadow bg-[#F6F7F8] justify-center flex flex-col leading-[50px]">
            <div className="w-[80px] text-center">
              <h2>COLOR</h2>
            </div>
            <div className="flex justify-around text-[40px] ">
              <li className="text-[#006CFF] w-1"></li>
              <li className="text-[#FC3E39]  w-1"></li>
              <li className="text-[#171717]  w-1"></li>
              <li className="text-[#FFF600]  w-1"></li>
              <li className="text-[#FF00B4]  w-1"></li>
              <li className="text-[#332b76]  w-1"></li>
            </div>
          </div>
      </Container>
    </div>
  )
}

export default Color;
