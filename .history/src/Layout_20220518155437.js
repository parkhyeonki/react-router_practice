import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontsize: 24 }}>Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
