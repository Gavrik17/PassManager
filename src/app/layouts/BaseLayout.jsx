import React from "react";
import "shared/css/App.css";
import "shared/css/colors.css";
import { Navbar } from "widgets/navbar";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
      <div className="app_wrapper">
        <div className="content">
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
  );
};

export default BaseLayout;
