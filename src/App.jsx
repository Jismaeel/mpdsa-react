import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import MembershipPage from "./Pages/MembershipPage";
import HomePages from "./Pages/HomePages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkylasDrivingPage from "./Pages/SkylasDrivingPage";
import CraigsDrivingPage from "./Pages/CraigsDrivingPage";
import EddiesDrivingPage from "./Pages/EddiesDrivingPage";
import TwoLilliesDrivingPage from "./Pages/TwoLilliesDrivingPage";
import QDrivingPage from "./Pages/QDrivingPage";
import EbenezerDrivingPage from "./Pages/EbenezerDrivingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/member" element={<MembershipPage />} />
        <Route path="/SkylasDrivingSchool" element={<SkylasDrivingPage />} />
        <Route path="/CraigsDrivingSchool" element={<CraigsDrivingPage />} />
        <Route path="/QDrivingSchool" element={<QDrivingPage />} />
        <Route
          path="/TwoliliesDrivingSchool"
          element={<TwoLilliesDrivingPage />}
        />
        <Route path="/EddiesDrivingSchool" element={<EddiesDrivingPage />} />
        <Route
          path="/EbenezerDrivingSchool"
          element={<EbenezerDrivingPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
