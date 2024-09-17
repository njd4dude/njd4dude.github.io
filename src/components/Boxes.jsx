import React from "react";

const Boxes = ({ category, items }) => {
  let bgColor = "";
  if (category === "Programming Lanuguages") {
    bgColor = "bg-red-500";
  } else if (category === "Web Techonolgies") {
    bgColor = "bg-green-500";
  } else if (category === "Fullstack Development") {
    bgColor = "bg-blue-500";
  }
  return (
    <div className={`${bgColor} bg-opacity-75 p-10 rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 duration-75`}>
      <h2 className="text-2xl mb-4 font-bold font-silkscreen">{category}</h2>
      <ul className="list-disc pl-5 space-y-2 font-bold text-lg">
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Boxes;
