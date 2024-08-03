
const Membership = () => {
  return (
    <>
      <div class="sm:ml-64">
        <section className="bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="container mx-auto">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Become a Member of The Mitchells Plain Driving Schools
                Association
              </h2>
              <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Join Mitchell's Plain Driving School Association, where
                excellence meets collaboration. Expand your reach, enhance your
                credibility, and join a community dedicated to safe driving
                education. Contact us today to learn more about membership
                benefits and requirements.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="../member"
                  className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Membership;
