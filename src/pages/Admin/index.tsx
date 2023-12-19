import React from "react";
import SideBar from "../../components/SideBar";
import { Navigate, Outlet } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../components/contexts/UserContext/UserContext";

function Admin() {
  const { token, setToken } = useContext(UserContext);

  return (
    <div className="bg-black-100 text-center  bg-primary text-primary">
      {!token && <Navigate to="/login" replace={true} />}
      <SideBar />
      <div className="bg-primary text-primary">admin</div>
      <Outlet />
    </div>
  );
}

export default Admin;
