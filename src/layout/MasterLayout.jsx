import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FlyonInit from "../components/FlyonInit";
import Navbar from "../components/Navbar";

const MasterLayout = () => {
  return (
    <>
      <FlyonInit />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;
