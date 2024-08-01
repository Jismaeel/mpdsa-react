import React, { useState } from "react";

const FAQ = () => {
  const [openDropdown1, setOpenDropdown1] = useState(true);
  const [openDropdown2, setOpenDropdown2] = useState(false);
  const [openDropdown3, setOpenDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setOpenDropdown1((prevOpenDropdown1) => !prevOpenDropdown1);
  };

  const toggleDropdown2 = () => {
    setOpenDropdown2((prevOpenDropdown2) => !prevOpenDropdown2);
  };

  const toggleDropdown3 = () => {
    setOpenDropdown3((prevOpenDropdown3) => !prevOpenDropdown3);
  };

  return (
    <div className="sm:ml-64">
      <section className="pt-16">
        <h2 className="text-center text-black px-6 text-3xl font-bold">
          Frequently asked questions
        </h2>
        <div className="container pt-4 mb-12 mx-auto md:px-6 xl:px-24 py-12">
          <div>
            <div className="rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200">
              <h2 className="mb-0" id="flush-headingOne">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-red-700 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]   :[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  onClick={toggleDropdown1}
                >
                  What are the requirements for obtaining a driver's license?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none   :fill-[#8FAEE0]   :group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {openDropdown1 && (
                <div className="py-4 px-5 text-black">
                  The requirements vary depending on your location and the type
                  of license you're seeking. Our team will guide you through the
                  process and provide all necessary information to help you
                  obtain your license smoothly.
                </div>
              )}
            </div>

            <div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200">
              <h2 className="mb-0">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-red-700 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]   :[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  onClick={toggleDropdown2}
                >
                  Do you provide vehicles for the driving test?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none   :fill-[#8FAEE0]   :group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {openDropdown2 && (
                <div className="py-4 px-5 text-black">
                  Yes, we offer vehicles for the driving test. Our vehicles are
                  well-maintained, equipped with dual controls for safety, and
                  are perfect for your test preparation.
                </div>
              )}
            </div>

            <div className="rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200">
              <h2 className="mb-0" id="flush-headingThree">
                <button
                  className="group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-red-700 [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]   :[&:not([data-te-collapse-collapsed])]:text-primary-400"
                  type="button"
                  onClick={toggleDropdown3}
                >
                  How many lessons do I need to pass my driving test?
                  <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none   :fill-[#8FAEE0]   :group-[[data-te-collapse-collapsed]]:fill-[#eee]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </h2>
              {openDropdown3 && (
                <div className="py-4 px-5 text-black">
                  The number of lessons needed varies depending on individual
                  skill levels and learning pace. Our instructors will assess
                  your progress and recommend the appropriate number of lessons
                  to ensure you're fully prepared for your test.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
