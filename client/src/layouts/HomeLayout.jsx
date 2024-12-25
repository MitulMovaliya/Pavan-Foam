import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <main className="bg-white">
        <Outlet /> {/* Content specific to the route will be rendered here */}
      </main>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
