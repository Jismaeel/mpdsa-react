import { Link } from "react-router-dom";
import Skylas from "../img/sd trans.webp";
import Ebenezer from "../img/ebaneezar.webp";
import Eddies from "../img/eddies ds.webp";
import lilies from "../img/lilies.webp";
import Craigs from "../img/craig ds.webp";
import Qs from "../img/qs ds.webp";

const LogoDisplay = () => {
  return (
    <>
      <div class="sm:ml-64">
        <section className="lg:px-12 lg:pb-12">
          {/* <!-- logo display --> */}
          <div className="lg:py-5 py-10 px-12 bg-gray-900 lg:rounded-full items-center justify-center">
            <div className="container mx-auto grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-16 px-auto items-center justify-center">
              <Link to="/SkylasDrivingSchool" className="w-28 h-auto">
                <img src={Skylas} />
              </Link>
              <Link to="/EbenezerDrivingSchool" className="w-28 h-auto">
                <img src={Ebenezer} />
              </Link>
              <Link to="/EddiesDrivingSchool" className="w-28 h-auto">
                <img src={Eddies} />
              </Link>
              <Link to="/TwoliliesDrivingSchool" className="w-28 h-auto">
                <img src={lilies} />
              </Link>
              <Link to="/CraigsDrivingSchool" className="w-28 h-auto">
                <img src={Craigs} />
              </Link>
              <Link to="/QDrivingSchool" className="w-28 h-auto">
                <img src={Qs} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LogoDisplay;
