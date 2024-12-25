import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  if (!user.user.role === "admin")
    return <Navigate to="/" state={{ from: location }} replace />;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="">
        <Sidebar open={open} setOpen={setOpen} />
        <div
          className={`${!open ? "ml-20" : "ml-72"} transition-all duration-300`}
        >
          <Outlet /> {/* Content specific to the route will be rendered here */}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
