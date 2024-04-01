import React from "react";
import Header from "./Header";

function Container(props) {
  return (
    <div
      className={`${
        props.fluid === true ? "w-full" : "max-w-[1200px]"
      } mx-auto py-1 ${props.extraclassName}`}
    >
      {props.children}
    </div>
  );
}

export default Container;
