import React from "react";

function Brand() {
  const brand = [
   
    {
      name: "Apple",
      Number: 99,
    },
    {
      name: "LG",
      Number: 99,
    },

    {
      name: "Samsung",
      Number: 99,
    },
    {
      name: "Siemens",
      Number: 99,
    },
  ];
  return (
    <div className="w-[270px] bg-[#F6F7F8] h-[245px]">
      <h2 className="w-[90px] text-center py-[20px] font-bold">BRAND</h2>
      <div>
        {brand.map((bran, index) => {
          return <Brandbox {...bran} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Brand;
const Brandbox = (props) => {
  return (
    <div className="flex justify-between px-[20px] leading-10">
      <div className="text-[#0d0505] font-medium">
        <h2>{props.name}</h2>
      </div>
      <div>
        <h2 className="text-[#767b80]">{props.Number}</h2>
      </div>
    </div>
  );
};
