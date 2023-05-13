import React from "react";
import Swal from "sweetalert2";

const Add = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeName.value;
    const supplierName = form.supplierName.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const coffeAdd = {
      name,
      supplierName,
      category,
      chef,
      taste,
      details,
      photoUrl,
    };
    console.log(coffeAdd);
    fetch("http://localhost:4000/coffe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good Job!!!",
            text: "Your Coffe is Added...",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="rounded-md bg-[#f8efd2] md:mx-40 md:my-20 h-[930px]  md:h-[600px] ">
        <div className="text-center">
          <h1 className="text-3xl font-bold pt-5">Add New Coffe</h1>
          <p className="mt-5 md:w-[650px] text-sm mx-auto ">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className=" grid md:grid-cols-2 ">
            <div className="mt-8 md:ml-20">
              <div className=" mb-4 w-full md:w-9/12 px-4">
                <label className="block font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter Coffe Name"
                  name="coffeName"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Supplier</label>
                <input
                  type="text"
                  placeholder="Enter Supplier Name"
                  name="supplierName"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Category</label>
                <input
                  type="text"
                  placeholder="Enter Category Name"
                  name="category"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="md:mt-8 md:ml-20">
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Chef</label>
                <input
                  placeholder="Enter Chef Name"
                  name="chef"
                  type="text"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Taste</label>
                <input
                  type="text"
                  placeholder="Enter Your Taste"
                  name="taste"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className=" w-full md:w-9/12 mb-4 px-4">
                <label className="block font-medium mb-2">Details</label>
                <input
                  type="text"
                  placeholder="Enter Your Details"
                  name="details"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className=" w-full md:w-[70%] mx-auto px-8 ">
            <label className="block font-medium mb-2">Photo URL</label>
            <input
              type="text"
              placeholder="Enter Photo URL"
              name="photoUrl"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="w-[70%] mx-auto px-8 py-2">
            <button className="w-full bg-[#D2B48C] border border-[#331A15] text-black font-bold py-2 px-4 rounded">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
