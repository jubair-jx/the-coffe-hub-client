import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowAddCoffe from "./ShowAddCoffe";

const AddCoffe = () => {
  const Loadedcoffes = useLoaderData();
  const [coffes, setCoffes] = useState(Loadedcoffes);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center  mt-6">
        Our Popular Products
      </h1>
      <div className=" mx-auto flex justify-center mt-5 ">
        <Link
          to="/addnew"
          className=" border text-center border-black px-4 py-2  text-md font-medium rounded-sm text-black bg-[#E3B577]"
        >
          Add Coffe
        </Link>
      </div>
      <div className="grid md:grid-cols-2 container md:px-40 md:py-10 gap-4 mt-4 px-6 py-6">
        {coffes.map((coffe) => (
          <ShowAddCoffe
            coffes={coffes}
            setCoffes={setCoffes}
            key={coffe._id}
            coffe={coffe}
          ></ShowAddCoffe>
        ))}
      </div>
    </div>
  );
};

export default AddCoffe;
