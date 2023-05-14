import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const coffe = useLoaderData();
  const { _id, name, supplierName, category, chef, taste, details, photoUrl } =
    coffe;
  const handleUpdateCoffeForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.coffeName.value;
    const supplierName = form.supplierName.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;

    const updateCoffe = {
      name,
      supplierName,
      category,
      chef,
      taste,
      details,
      photoUrl,
    };

    fetch(`http://localhost:4000/coffes/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div>
        <div className="rounded-md bg-[#f8efd2] md:mx-40 md:my-20 h-[930px]  md:h-[600px] ">
          <div className="text-center">
            <h1 className="text-3xl font-bold pt-5">
              Update Existing Coffee Details
            </h1>
            <p className="mt-5 md:w-[650px] text-sm mx-auto ">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleUpdateCoffeForm}>
            <div className=" grid md:grid-cols-2 ">
              <div className="mt-8 md:ml-20">
                <div className=" mb-4 w-full md:w-9/12 px-4">
                  <label className="block font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Coffe Update Name"
                    defaultValue={name}
                    name="coffeName"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" w-full md:w-9/12 mb-4 px-4">
                  <label className="block font-medium mb-2">Supplier</label>
                  <input
                    type="text"
                    placeholder="Enter Update Supplier Name"
                    name="supplierName"
                    defaultValue={supplierName}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" w-full md:w-9/12 mb-4 px-4">
                  <label className="block font-medium mb-2">Category</label>
                  <input
                    type="text"
                    placeholder="Enter Update Category Name"
                    name="category"
                    defaultValue={category}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="md:mt-8 md:ml-20">
                <div className=" w-full md:w-9/12 mb-4 px-4">
                  <label className="block font-medium mb-2">Chef</label>
                  <input
                    placeholder="Enter Update Chef Name"
                    name="chef"
                    defaultValue={chef}
                    type="text"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" w-full md:w-9/12 mb-4 px-4">
                  <label className="block font-medium mb-2">Taste</label>
                  <input
                    type="text"
                    defaultValue={taste}
                    placeholder="Enter Update Your Taste"
                    name="taste"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className=" w-full md:w-9/12 mb-4 px-4">
                  <label className="block font-medium mb-2">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Update Coffe Price"
                    name="details"
                    defaultValue={details}
                    className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full md:w-[70%] mx-auto px-8 ">
              <label className="block font-medium mb-2">Photo URL</label>
              <input
                type="text"
                placeholder="Enter Update Photo URL"
                name="photoUrl"
                defaultValue={photoUrl}
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="w-[70%] mx-auto px-8 py-2">
              <button className="w-full bg-[#D2B48C] border border-[#331A15] text-black font-bold py-2 px-4 rounded">
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
