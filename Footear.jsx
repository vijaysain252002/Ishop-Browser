import React from "react";
import Container from "./Container";

function Footear() {
  const informations = [
    {
      title: "Infomation",
      about: "About",
      infomation: "Infomation",
      Policy: "Privacy Policy",
      Conditions: "UsTerms & Conditions",
    },
    {
      title: "Infomation",
      about: "About",
      infomation: "Infomation",
      Policy: "Privacy Policy",
      Conditions: "UsTerms & Conditions",
    },
    {
      title: "Infomation",
      about: "About",
      infomation: "Infomation",
      Policy: "Privacy Policy",
      Conditions: "UsTerms & Conditions",
    },
    {
      title: "Infomation",
      about: "About",
      infomation: "Infomation",
      Policy: "Privacy Policy",
      Conditions: "UsTerms & Conditions",
    },
    {
      title: "Infomation",
      about: "About",
      infomation: "Infomation",
      Policy: "Privacy Policy",
      Conditions: "UsTerms & Conditions",
    },
  ];
  return (
    <div>
      <Container>
        <div className=" w-[100%] leading-8 ">
          <ul className="flex justify-between">
            {informations.map((info, index) => {
              return <Infomationbox {...info} key={index} />;
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Footear;
const Infomationbox = (props) => {
  return (
    <div>
      <h1 className=" font-bold">{props.title}</h1>
      <h2 className="pt-[10px]">{props.about} </h2>
      <h2>{props.infomation} </h2>
      <h2> {props.Policy} </h2>
      <h2>{props.Conditions}</h2>
    </div>
  );
};
