import AlertHero from "./AlertHero";

const HeroSection = () => {
  return (
    <>
      <div className="pt-16">
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
    <AlertHero />

            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl animate-[fade-in-right_1s_ease-in-out]">
              Welcome to Mitchell's Plain Driving School Association
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
              {" "}
              your trusted partner for safe, confident driving. With certified
              instructors and personalized lessons, we'll guide you to success
              on the road. Book your lessons now and start your journey with us.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
