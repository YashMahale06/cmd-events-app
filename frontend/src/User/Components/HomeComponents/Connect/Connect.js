import React from "react";

import wed from "../../../../Assets/Home_Images/connect_images/wed7.jpeg";

const Connect = () => {
  return (
    <div className="bg-[rgba(201,164,142,1)] p-8 ">
      <div className="border-white border-2 lg:border-4 lg:p-20  flex justify-center items-center  ">
        <div className="justify-center bg-[rgba(201,164,142,1)] m-4 text-center">
          <a
            href="#"
            class="flex flex-col items-center bg-white rounded-lg shadow md:flex-row w-[250px] h-[300px] lg:w-[1000px] lg:h-[400px]  "
          >
            <img
              class=" rounded-t-lg h-[300px] w-[300px] lg:h-[400px] lg:w-[500px] md:w-48 md:rounded-none md:rounded-s-lg"
              src={wed}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal w-[300px] h-[400px] lg:h-[400px] lg:w-[500px]">
              <h5 class="text-xl font-bold tracking-tight text-black text-center lg:mt-16 lg:text-3xl">
                Connect With Us
              </h5>
              <h3 class=" font-bold text-lg lg:text-3xl text-[rgba(201,164,142,1)] text-center ">
                Let us help you <br />
                <h3 class=" font-bold text-lg lg:text-3xl text-[rgba(201,164,142,1)] text-center ">
                  plan your perfect event!
                </h3>
              </h3>

             <a href="/contact">
              <button
                type="button"
                class="text-white w-1\2  lg:mt-4 lg:mb-4 px-2 py-2 bg-black font-semibold text-sm lg:px-4 lg:py-3 lg:w-full rounded-lg"
              >
                Connect
              </button>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
