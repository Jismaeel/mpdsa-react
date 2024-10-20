import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Promo1 from "../assets/img/promo1.jpg";
import Promo from "../assets/img/promo.jpg";

// Sample dynamic data fetching (replace with API calls or props)
const fetchPromoData = () => {
  return [
    // {
    //   title: "Weekend Special",
    //   description: "Book with Skylas Driving School",
    //   image: Promo,
    //   whatsappMessage: "I am interested in this Promo",
    //   phone: "+27721941247",
    // },
    {
      title: "Mid-Oct Sale",
      description: "Book with Craigs Driving ",
      image: Promo1,
      whatsappMessage: "I am interested in this Promo",
      phone: "+27782829282",
    },
  ];
};

const PromoCarousel = () => {
  const [promoData, setPromoData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  // Simulating dynamic data fetching (use an API or database call in real cases)
  useEffect(() => {
    const promos = fetchPromoData();
    setPromoData(promos);
  }, []);

  // Default settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleWhatsAppClick = (phone, message) => {
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the selected image to view in modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <div>
      <h2 className="text-black text-3xl font-bold text-center pt-14 pb-2">Promotions and Deals</h2>
      <div className="pb-10">
        {promoData.length > 0 ? (
          promoData.length === 1 ? (
            <div className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover cursor-pointer"
                  src={promoData[0].image}
                  alt={promoData[0].title}
                  onClick={() => handleImageClick(promoData[0].image)} // Open modal on click
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {promoData[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {promoData[0].description}
                  </p>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                    onClick={() =>
                      handleWhatsAppClick(
                        promoData[0].phone,
                        promoData[0].whatsappMessage
                      )
                    }
                  >
                    Contact via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Slider {...settings}>
              {promoData.map((promo, index) => (
                <div key={index} className="p-4">
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      className="w-full h-48 sm:h-64 lg:h-80 object-cover cursor-pointer"
                      src={promo.image}
                      alt={promo.title}
                      onClick={() => handleImageClick(promo.image)} // Open modal on click
                    />
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {promo.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{promo.description}</p>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
                        onClick={() =>
                          handleWhatsAppClick(
                            promo.phone,
                            promo.whatsappMessage
                          )
                        }
                      >
                        Contact via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )
        ) : (
          <p>Loading promotions...</p>
        )}
      </div>

      {/* Modal for viewing the image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg">
            <img
              className="lg:w-96 w-80 h-auto max-h-screen object-cover"
              src={selectedImage}
              alt="Promo"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromoCarousel;
