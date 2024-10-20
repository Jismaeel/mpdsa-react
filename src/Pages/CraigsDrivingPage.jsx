import CraigDS from "../assets/img/craig ds.webp";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { HashLink as Link } from "react-router-hash-link";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import PromoCards from "../components/PromoCards";
import img from "../assets/img/promo.jpg";

const CraigsDrivingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define state variables for each form field
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [transmission, setTransmission] = useState("");
  const [courseOption, setCourseOption] = useState("");
  const [packageOption, setPackageOption] = useState("");
  const [carHire, setCarHire] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return <Loading loadimg={CraigDS} />;
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setCarHire(checked);
    } else {
      switch (name) {
        case "firstname":
          setFirstname(value);
          break;
        case "surname":
          setSurname(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "phonenumber":
          setPhonenumber(value);
          break;
        case "transmission":
          setTransmission(value);
          setCourseOption("");
          setPackageOption("");
          setCarHire(false);
          break;
        case "courseOption":
          setCourseOption(value);
          break;
        case "packageOption":
          setPackageOption(value);
          break;
        default:
          break;
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname,
      surname,
      email,
      phonenumber,
      transmission,
      courseOption,
      packageOption,
      carHire,
    };

    try {
      const response = await axios.post(
        "https://node-server-c9zt.onrender.com/submit-bookingskylas",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success("Submission successful!");

      // Reset form fields
      setFirstname("");
      setSurname("");
      setEmail("");
      setPhonenumber("");
      setTransmission("");
      setCourseOption("");
      setPackageOption("");
      setCarHire(false);
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        error.response?.data?.message ||
          "An error occurred during submission. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Craigs Driving School-Book Your Lessons</title>
        <meta
          name="description"
          content="Book driving lessons with Craigs Driving School in Mitchells Plain. Safe and confident driving with experienced instructors."
        />
        <meta
          name="keywords"
          content="driving lessons, Craigs Driving School, Mitchells Plain, driving instructor, learner driver"
        />
        <meta name="author" content="Craigs Driving School" />
        <link rel="canonical" href="https://mpdsa.online/CraigsDrivingSchool" />
      </Helmet>

      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={CraigDS} className="h-auto w-36" alt="SKYLAS Logo" />
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                  aria-current="page"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  smooth
                  to="#Bookingsform1"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                >
                  Book with
                </Link>
              </li>

              <li>
                <Link
                  to="Contactus"
                  className="block py-2 px-3 text-white rounded hover:bg-red-500 md:hover:bg-transparent md:border-0 md:hover:text-red-400 md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className=":bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                  clipRule="evenodd"
                />
              </svg>
              Sky is the limit
            </a>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
              Book your next lesson with Craigs Driving School
            </h1>
            <p className="text-lg font-normal text-gray-400 mb-6">
              Craig's Driving School is a reputable institution providing
              quality driving instruction services. With a focus on safety and
              professionalism, the school offers tailored courses for learners
              at various skill levels. Experienced instructors at Craig's
              Driving School ensure that students receive comprehensive training
              to become confident and responsible drivers.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gray-900">
        <div className="bg-gray-900 py-10">
          <div className="flex flex-col items-center px-6 mx-auto">
            <a
              href="#"
              className="flex items-center mb-3 text-2xl font-semibold text-white"
            >
              <img className="w-40 h-auto mr-2" src={CraigDS} alt="logo" />
            </a>
            <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1
                  id="Membership"
                  className="text-xl font-bold leading-tight tracking-tight text-white"
                >
                  Bookings
                </h1>
                <form
                  id="Bookingsform1"
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      placeholder="firstname"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      value={firstname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="surname"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Surname
                    </label>
                    <input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Surname"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      value={surname}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Email"
                      value={email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phonenumber"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phonenumber"
                      id="phonenumber"
                      aria-describedby="helper-text-explanation"
                      className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      value={phonenumber}
                      onChange={handleInputChange}
                      required
                    />
                    <p
                      id="helper-text-explanation"
                      className="mt-2 text-sm text-gray-400"
                    >
                      Select a phone number that matches the format.
                    </p>
                  </div>

                  <fieldset className="mb-4">
                    <legend className="block text-sm font-semibold mb-2 text-gray-50">
                      Course Selection:
                    </legend>
                    <select
                      id="transmission"
                      name="transmission"
                      className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={transmission}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Choose transmission
                      </option>
                      <option value="manual">Manual</option>
                      <option value="automatic">Automatic</option>
                    </select>
                    {transmission === "manual" && (
                      <div id="manual-options">
                        <div className="grid grid-cols-2 gap-5">
                          <div className="flex items-center mb-4">
                            <input
                              id="north-radio"
                              type="radio"
                              name="courseOption"
                              value="north"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={courseOption === "north"}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="north-radio"
                              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <a
                                href="#"
                                className="text-red-300 hover:underline"
                              >
                                North
                              </a>
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="south-radio"
                              type="radio"
                              name="courseOption"
                              value="south"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={courseOption === "south"}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="south-radio"
                              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              <a
                                href="#"
                                className="text-red-300 hover:underline"
                              >
                                South
                              </a>
                            </label>
                          </div>
                        </div>
                        {courseOption && (
                          <div className="mb-4">
                            <label
                              htmlFor="packageOption"
                              className="block mb-2 text-sm font-medium text-white"
                            >
                              Select a Package
                            </label>
                            <select
                              id={courseOption}
                              name="packageOption"
                              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                              value={packageOption}
                              onChange={handleInputChange}
                              required
                            >
                              <option value="" disabled>
                                Choose package
                              </option>
                              {courseOption === "north" ? (
                                <>
                                  <option value="R220-per hour">
                                    R220-per hour
                                  </option>
                                  <option value="6 Lessons-R1300">
                                    6 Lessons-R1300
                                  </option>
                                  <option value="8 Lessons-R1700">
                                    8 Lessons-R1700
                                  </option>
                                  <option value="10 Lessons-R2100">
                                    10 Lessons-R2100
                                  </option>
                                </>
                              ) : (
                                <>
                                  <option value="R210-per hour">
                                    R210-per hour
                                  </option>
                                  <option value="6 Lessons-R1200">
                                    6 Lessons-R1200
                                  </option>
                                  <option value="8 Lessons-R1600">
                                    8 Lessons-R1600
                                  </option>
                                  <option value="10 Lessons-R2000">
                                    10 Lessons-R2000
                                  </option>
                                </>
                              )}
                            </select>
                          </div>
                        )}
                        <div className="flex items-center mb-4">
                          <input
                            id="carHire"
                            name="carHire"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={carHire}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="carHire"
                            className="ml-2 text-sm font-medium text-gray-300"
                          >
                            Add car hire
                          </label>
                        </div>
                      </div>
                    )}
                    {transmission === "automatic" && (
                      <div id="automatic-options">
                        <label
                          htmlFor="packageOption"
                          className="block mb-2 text-sm font-medium text-white"
                        >
                          Select a Package
                        </label>
                        <select
                          id="automatic-packages"
                          name="packageOption"
                          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                          value={packageOption}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Choose package
                          </option>
                          <option value="R250-per hour">R250-per hour</option>
                          <option value="6 Lessons-R1500">
                            6 Lessons-R1500
                          </option>
                          <option value="8 Lessons-R1900">
                            8 Lessons-R1900
                          </option>
                          <option value="10 Lessons-R2400">
                            10 Lessons-R2400
                          </option>
                        </select>
                        <div className="flex items-center mb-4 mt-4">
                          <input
                            id="carHire"
                            name="carHire"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            checked={carHire}
                            onChange={handleInputChange}
                          />
                          <label
                            htmlFor="carHire"
                            className="ml-2 text-sm font-medium text-gray-300"
                          >
                            Add car hire? (R650 extra)
                          </label>
                        </div>
                      </div>
                    )}
                  </fieldset>

                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit form"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="block w-full shrink-0 grow-0 basis-auto">
          <div className="h-[500px] w-full">
            <iframe
              className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52893.19745535861!2d18.561739174606267!3d-34.04836395999219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4721e60ec221%3A0xd3097704b4edb9ac!2sMitchells%20Plain%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1711307058478!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <footer className=" bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={CraigDS} className="w-32 h-auto" alt="msdsa Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
              <li>
                <Link
                  smooth
                  to="#Aboutus"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <a className="hover:underline me-4 md:me-6">Why Choose us</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              The Mitchells Plain Drivivng School™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default CraigsDrivingPage;
