import Skylas from "../assets/img/sd trans ds.webp";
import Ebenezer from "../assets/img/ebaneezar ds.webp";
import Eddies from "../assets/img/eddies ds1.webp";
import lilies from "../assets/img/lilies ds.webp";
import Craigs from "../assets/img/craig ds1.webp";
import Qs from "../assets/img/qs ds1.webp";
import { Link } from "react-router-dom";


const DrivingSchoolCards = () => {
  return (
    <>
      <div class="pt-16">
        <section className="mt-12">
          <h2
            id="DrivingSchools"
            className="pt-6 text-3xl font-bold text-black text-center"
          >
            Driving Schools
          </h2>
          <div className="grid grid-row lg:grid-cols-3 mb-12 p-6 gap-6 container mx-auto items-center justify-between">
            {/* <!-- Card --> */}
            <div className="block rounded-lg bg-white shadow-xl text-left">
              {/* <!-- Card image --> */}
              <a href="#!">
                <img className="rounded-t-lg" src={Skylas} alt="" />
              </a>

              {/* <!-- Card body --> */}
              <div className="p-6">
                {/* <!-- Title --> */}
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Skylas Driving School
                </h2>

                {/* <!-- Text --> */}
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>


                <a
                  href="https://api.whatsapp.com/send?phone=+27721941247"
                  https
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Card --> */}

            
            {/* <div className="block rounded-lg bg-white shadow-xl text-left">
             
              <a href="#!">
                <img className="rounded-t-lg w-auto h-auto" src={Qs} alt="" />
              </a>

             
              <div className="p-6">
               
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Q's Driving School
                </h2>

               
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>

                
                <Link
                  to="https://qsdrivingschool.co.za/"
                  className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Book now
                </Link>

                <a
                  href="https://api.whatsapp.com/send?phone=+27782829282"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
             */}

            {/* <div className="block rounded-lg bg-white shadow-xl text-left">
             
              <a href="#!">
                <img className="rounded-t-lg" src={lilies} alt="" />
              </a>

          
              <div className="p-6">
                
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Two Lillies Drving School
                </h2>

                
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>

                
                <Link
                  to="/TwoliliesDrivingSchool"
                  className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Book now
                </Link>

                <a
                  href="https://api.whatsapp.com/send?phone=+27732041832"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div> */}
           

            {/* <!-- Card --> */}
            <div className="block rounded-lg bg-white shadow-xl text-left">
              {/* <!-- Card image --> */}
              <a href="#!">
                <img className="rounded-t-lg" src={Eddies} alt="" />
              </a>

              {/* <!-- Card body --> */}
              <div className="p-6">
                {/* <!-- Title --> */}
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Eddies Drving School
                </h2>

                {/* <!-- Text --> */}
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>


                <a
                  href="https://api.whatsapp.com/send?phone=+27738918997"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Card --> */}

            {/* <!-- Card --> */}
            <div className="block rounded-lg bg-white shadow-xl text-left">
              {/* <!-- Card image --> */}
              <a href="#!">
                <img className="rounded-t-lg" src={Craigs} alt="" />
              </a>

              {/* <!-- Card body --> */}
              <div className="p-6">
                {/* <!-- Title --> */}
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Craigs Driving School
                </h2>

                {/* <!-- Text --> */}
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>


                <a
                  href="https://api.whatsapp.com/send?phone=+27728735516"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Card --> */}

            {/* <!-- Card --> */}
            <div className="block rounded-lg bg-white shadow-xl text-left">
              {/* <!-- Card image --> */}
              <a href="#!">
                <img className="rounded-t-lg" src={Ebenezer} alt="" />
              </a>

              {/* <!-- Card body --> */}
              <div className="p-6">
                {/* <!-- Title --> */}
                <h2 className="mb-2 text-xl font-bold tracking-wide text-black">
                  Ebenezar Driving School
                </h2>

                {/* <!-- Text --> */}
                <p className="mb-4 text-base text-black">
                  Get to know this Driving School
                </p>

          

                <a
                  href="https://api.whatsapp.com/send?phone=+27789639923"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  WhatsApp us
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- Card --> */}
          </div>
        </section>
      </div>
    </>
  );
};

export default DrivingSchoolCards;
