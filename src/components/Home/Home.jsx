import React, { useEffect, useState } from "react";
import Banner from "../Header/Banner/Banner";
import AddCoffe from "../AddCoffe/AddCoffe";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <AddCoffe></AddCoffe>
    </>
  );
};

export default Home;
