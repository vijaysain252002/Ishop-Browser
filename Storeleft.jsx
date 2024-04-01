import React from "react";
import Container from "../component/Container";

function Storeleft() {
  const items = [
    {
      name: "Apple Car",
      url: "",
      count: 1
    },
    {
      name: "Air port & wireless",
      url: "",
      count: 1
    },

    {
      name: "Cables & Docks",
      url: "",
      count: 1
    },
    {
      name: "Cases & Films",
      url: "",
      count: 1
    },

    {
      name: "Connected home",
      url: "",
      count: 1
    },
    {
      name: "Headphones",
      url: "",
      count: 1
    },
  ];
  return (
    <div className="flex gap-[20px]">
      <div className=" shadow h-[371px] bg-[#F6F7F8] w-[270px] leading-10 pl-5 cursor-pointer">
        <h1 className="font-bold">ACCESORIES 6</h1>
        <div>
          {items.map((ite, i) => {
            return (
             <Itemsbox{...ite} key={i}/>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Storeleft;
const Itemsbox = (props)=>{
return <div className="flex justify-between hover:text-[#33A0FF] pt-[10px]">
      {props.name}
      <div>{props.count}</div>
</div>
}






 
