import Msdsa2 from "../img/mpddsa-01.webp";

const AboutUs = () => {
  return (
    <>
      <div id="Aboutus" className="sm:ml-64 ">
        <section>
          <div className="block shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-900">
            <div className="flex flex-wrap items-center">
              <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img src={Msdsa2} alt="MPDSA  logo" className="w-full" />
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="px-6 py-12 md:px-12">
                  <section>
                    <h2 className="mb-4 text-2xl font-bold text-white">
                      About Mitchells Plain Driving School Association
                    </h2>
                  </section>
                  <p className="mb-6 flex items-center font-bold uppercase text-danger text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                      />
                    </svg>
                    Get to know The Mitchells Plain Driving School Association
                  </p>
                  <p className="mb-6 text-white">
                    Welcome to Mitchells Plain Driving School Association! We're
                    proud to be your trusted partner in promoting safe and
                    confident driving skills. Our driving school has been
                    established with a strong commitment to excellence and
                    safety, dedicated to serving the Mitchells Plain community
                    for several years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
