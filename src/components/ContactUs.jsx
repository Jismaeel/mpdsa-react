import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const ContactUs = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

  try {
    const response = await axios.post(
      "https://node-server-c9zt.onrender.com/submit-contact",
      {
        firstname,
        email,
        message,
      }
    );

    toast.success("Message sent successfully!");
  } catch (error) {
    console.error("Error response:", error.response?.data || error.message);
    toast.error(
      error.response?.data || "Failed to send message. Please try again."
    );
  }
  };

  return (
    <div id="Contactus">
      <section>
        <div className="block shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-900">
          <div className="flex flex-wrap items-center">
            <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div className="h-[500px] w-full">
                <iframe
                  className="left-0 top-0 h-full w-full"
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

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12 px-6">
              <div className="mx-auto max-w-[700px] md:px-3 text-center">
                <h2
                  id="Contactus"
                  className="my-6 text-3xl font-bold text-white"
                >
                  Contact us
                </h2>

                <form
                  id="contact-form"
                  className="text-left"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      First name
                    </label>
                    <input
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      type="text"
                      placeholder="John"
                      className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email" // Added input type to ensure correct email format
                      placeholder="john@example.com"
                      className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      required
                    />
                    <p
                      id="helper-text-explanation"
                      className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      We’ll never share your details. Read our{" "}
                      <a
                        href="#"
                        className="font-medium hover:underline text-red-500"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Your message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your Message"
                      required
                      rows="4"
                      className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                    ></textarea>
                  </div>
                  <div className="items-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center relative ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <span className="button-text">
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
