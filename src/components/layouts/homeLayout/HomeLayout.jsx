import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
