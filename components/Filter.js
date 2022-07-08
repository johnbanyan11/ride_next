import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Filter = ({
  ridesData,
  setShowFilterModal,
  statename,
  cityname,
  setStatename,
  setCityname,
  setActive,
}) => {
  const states = ridesData.map((item) => item.state);
  const cities = ridesData.map((item) => item.city);

  const handleStateChange = (e) => {
    setStatename(e.target.value);
    setActive("state");
  };
  const handleCityChange = (e) => {
    setCityname(e.target.value);
    setActive("city");
  };

  return (
    <div className="bg-black p-5 rounded-xl flex flex-col gap-1 h-42 absolute z-10 top-20 right-2">
      <div className="flex justify-between items-center p-1">
        <h1 className="text-white" >
          Filters
        </h1>
        <AiFillCloseCircle className="w-4 h-4 fill-white" onClick={() => setShowFilterModal(false)} />
      </div>
      <hr />
      <div className="flex m-1 ">
        <select
          className="bg-zinc-500 w-32 h-10 text-white rounded-lg p-2 border-none"
          name="state"
          value={statename}
          onChange={(e) => handleStateChange(e)}
        >
          <option className="">State</option>
          {states.map((item, index) => (
            <option className="bg-zinc-500  text-white" key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex m-1">
        <select
          className="bg-zinc-500 w-32 h-10 rounded-lg p-2 border-none text-white"
          name="state"
          value={cityname}
          onChange={(e) => handleCityChange(e)}
        >
          <option className="">City</option>
          {cities.map((item, index) => (
            <option className="bg-zinc-500 w-20 h-8 text-white" key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
