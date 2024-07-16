import React, { useState } from "react";
import servicecardImage from "../../../Assets/backdrops/7.jpg";

const ServicesGrid = () => {
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pt-8 pb-12 lg:pt-[60px] lg:pb-[90px] bg-[#ffffff]  overflow-x-hidden ">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="font-bold lg:mb-2 block text-3xl lg:text-4xl text-[rgba(190,173,150,1)]">
                  Check Our Portfolio
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-4">
            <PortfolioCard
              ImageHref={servicecardImage}
              category="Branding"
              title="Wedding Planner"
              button="View Details"
              description="We capture a memories for you"
              buttonHref="/services/wedding"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={servicecardImage}
              category="marketing"
              title="Baby Shower Ceremony"
              button="View Details"
              description="From proposal to big day, we've got you!"
              buttonHref="/gallery/babyshower"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={servicecardImage}
              category="marketing"
              title="Ballon Service"
              button="View Details"
              buttonHref="/services/ballon"
              description="From proposal to big day, we've got you!"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={servicecardImage}
              category="Development"
              title="Special Entries"
              button="View Details"
              description="CMD events makes your entries more special"
              buttonHref="/services/special_entries"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={servicecardImage}
              category="Design"
              title="Birthday Parties"
              button="View Details"
              description="Make your first day of 365 days journey more special"
              buttonHref="/gallery/birthday"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref={servicecardImage}
              category="Marketing"
              title="Corporate Events"
              button="View Details"
              buttonHref="/services/corporate"
              description="Wow your guests, elevate your event!"
              showCard={showCard}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  description,
  title,
  button,
  buttonHref,
}) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div class="max-w-sm bg-white border mb-8 rounded-lg shadow-lg">
          <a href="#">
            <img class="rounded-t-lg" src={ImageHref} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 ">
                {title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 ">{description}</p>
            <a
              href={buttonHref}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg border-2 border-red-500"
            >
              {button}
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/*<div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px]">
            <img src={ImageHref} alt="portfolio" className="w-full h-72" />
          </div>
          <div className="relative z-10 mx-12 border-4 border-red-500  -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[20px]  text-center shadow-portfolio dark:shadow-box-dark">
            <h3 className=" text-gray-800 mb-2 text-2xl text-center font-bold">
              {title}
            </h3>
            <span className="text-red-500 text-center mb-2 block text-sm font-semibold">
              {description}
            </span>
            <a
              href={buttonHref}
              className="text-black border-red-500 border-2 bg-white inline-block   border-stroke  py-[10px] px-7 text-sm font-medium transition"
            >
              {button}
            </a>
          </div>
      </div>*/}
      </div>
    </>
  );
};

export default ServicesGrid;
