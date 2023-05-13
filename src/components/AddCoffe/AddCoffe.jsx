import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowAddCoffe from "./ShowAddCoffe";

const AddCoffe = () => {
  const coffes = useLoaderData();

  return (
    <div>
      <h1 className="font-bold text-3xl text-center  mt-6">
        Our Popular Products
      </h1>
      <div className="grid grid-cols-2 container px-40 py-10 gap-6">
        {coffes.map((coffe) => (
          <ShowAddCoffe key={coffe._id} coffe={coffe}></ShowAddCoffe>
        ))}
      </div>
    </div>
  );
};

export default AddCoffe;
