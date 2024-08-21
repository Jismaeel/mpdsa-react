const PromoCards = ({ PromoImg, WALink, PromoName, Lessons, Price }) => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="max-w-sm mx-auto border border-gray-200 rounded-lg shadow bg-gray-800">
          <a href={WALink}>
            <img className="rounded-t-lg" src={PromoImg} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {PromoName}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-400">
              {Lessons}
            </p>
            <p className="mb-3 font-normal text-gray-400">
              {Price}
            </p>
            <a
              href={WALink}
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
      </div>
    </>
  );
};

export default PromoCards;
