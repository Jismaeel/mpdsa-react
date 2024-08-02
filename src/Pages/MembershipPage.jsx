import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";;
import msdsa1 from "../img/mpddsa-02 1.webp";
import { HashLink as Link } from "react-router-hash-link";

const MembershipPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [drivingschool, setDrivingschool] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [area, setArea] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const data = {
      firstname,
      surname,
      email,
      drivingschool,
      phonenumber,
      area,
      termsAccepted,
    };

    try {
      const response = await axios.post(
        "https://node-server-c9zt.onrender.com/submit-membership", // Directly using the endpoint
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success("Submission successful!");

      // Reset form after successful submission
      setFirstname("");
      setSurname("");
      setEmail("");
      setDrivingschool("");
      setPhonenumber("");
      setArea("");
      setTermsAccepted(false);
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
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={msdsa1} className="w-16 h-auto" alt="msdsa Logo" />
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
                  Become a Member
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
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2"
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
                  fill-rule="evenodd"
                  d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                  clip-rule="evenodd"
                />
              </svg>
              Become a Member
            </a>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
              Joining the Mitchells Plain Driving School Association could offer
              several benefits
            </h1>
            <p className="text-lg font-normal text-gray-400 mb-6">
              Consider researching the specific benefits offered by the
              Mitchells Plain Driving School Association to determine if joining
              aligns with your professional goals and interests.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Network
              </a>
              <h2 className="text-white text-3xl font-extrabold mb-2">
                Networking:
              </h2>
              <p className="text-lg font-normal text-gray-400 mb-4">
                You can connect with other driving instructors and professionals
                in your area. This network can provide support, advice, and
                potential collaborations.
              </p>
              <a
                href="#"
                className="text-red-400 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Advocate
              </a>
              <h2 className="text-white text-3xl font-extrabold mb-2">
                Advocacy:
              </h2>
              <p className="text-lg font-normal text-gray-400 mb-4">
                Associations often advocate for the interests of their members.
                This could include lobbying for favorable legislation,
                addressing industry concerns, or promoting the importance of
                safe driving practices
              </p>
              <a
                href="#"
                className="text-red-400 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        </div>
      </section>

      <div className="bg-gray-900 py-10">
        <div className="flex flex-col items-center px-6 mx-auto">
          <a
            href="#"
            className="flex items-center mb-3 text-2xl font-semibold text-white"
          >
            <img className="w-16 h-auto mr-2" src={msdsa1} alt="logo" />
          </a>
          <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
                Membership
              </h1>
              <form
                id="membership-form"
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder="John/Jane"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
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
                    id="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    type="text"
                    placeholder="Doe"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="drivingschool"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Driving School's Name
                  </label>
                  <input
                    id="drivingschool"
                    value={drivingschool}
                    onChange={(e) => setDrivingschool(e.target.value)}
                    type="text"
                    placeholder="** Driving Schools"
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phonenumber"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    type="tel"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  <p className="mt-2 text-sm text-gray-400">
                    Phone number format: 123-456-7890
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="area"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Select an Area
                  </label>
                  <select
                    id="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Choose an area</option>
                    <option value="Strandfontein">Strandfontein</option>
                    <option value="Eastridge">Eastridge</option>
                    <option value="Bayview">Bayview</option>
                    <option value="Beacon Valley">Beacon Valley</option>
                  </select>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms-checkbox"
                      value={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms-checkbox"
                      className="font-light text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-red-400 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`relative text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  Submit
                </button>
              </form>
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

      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={msdsa1} className="w-16 h-auto" alt="msdsa Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                The Mitchells Plain Driving Schools Association
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default MembershipPage;
