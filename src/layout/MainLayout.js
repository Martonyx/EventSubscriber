import React from "react";
import HeaderPage from "../components/headerPage";
import Footer from "../components/footer";

function MainLayout({ children }) {
  return (
    <div>
      <HeaderPage />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
