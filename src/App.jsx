import { BrowserRouter, Route, Routes } from "react-router-dom";
import MembershipPage from "./Pages/MembershipPage";
import HomePages from "./Pages/HomePages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SkylasDrivingPage from "./Pages/SkylasDrivingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<HomePages />} />
        <Route path="/member" element={<MembershipPage />} />
        <Route path="/SkylasDrivingSchool" element={<SkylasDrivingPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
