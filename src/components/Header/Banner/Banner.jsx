import React from "react";
import "../Banner/Banner.css";
import featImg1 from "../../../assets/images/icons/1.png";
import featImg2 from "../../../assets/images/icons/2.png";
import featImg3 from "../../../assets/images/icons/3.png";
import featImg4 from "../../../assets/images/icons/4.png";
const Banner = () => {
  return (
    <div>
      <div className="bg-banner">
        <div className=" py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
            <div className="text-center lg:text-left lg:w-1/2 md:mt-20 mt-10 sm:mt-20">
              <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
                Would you like a Cup of Delicious Coffee?
              </h2>
              <p className="mt-6 lg:mt-8 text-base text-gray-300 sm:mt-8 sm:text-md lg:text-md xl:text-sml">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-md font-medium rounded-sm text-black bg-[#E3B577]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =====================   Feature Section Part Here ================ */}
      <div className="bg-[#ECEAE3] md:h-52 lg:h-52 md:text-left text-center w-full">
        <div className="flex flex-wrap max-w-screen-lg items-center justify-center mx-auto pt-8">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src={featImg1}
              alt="Image 1"
              className="w-10 sm:mx-0 md:mx-0 lg:mx-0 mx-auto"
            />
            <h2 className="text-lg font-semibold mt-4">Awesome Aroma</h2>
            <p className="mt-2 text-sm text-gray-500">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src={featImg2}
              alt="Image 2"
              className="w-10 sm:mx-0 md:mx-0 lg:mx-0 mx-auto"
            />
            <h2 className="text-lg font-semibold mt-4">High Quality</h2>
            <p className="mt-2 text-sm text-gray-500">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src={featImg3}
              alt="Image 3"
              className="w-10 sm:mx-0 md:mx-0 lg:mx-0 mx-auto"
            />
            <h2 className="text-lg font-semibold mt-4">Pure Grades</h2>
            <p className="mt-2 text-sm text-gray-500">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <img
              src={featImg4}
              alt="Image 4"
              className="w-10 sm:mx-0 md:mx-0 lg:mx-0 mx-auto"
            />
            <h2 className="text-lg font-semibold mt-4">Proper Roasting</h2>
            <p className="mt-2 text-sm text-gray-500">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      {/* =====================   Feature Section Part Here ================ */}
    </div>
  );
};

export default Banner;
