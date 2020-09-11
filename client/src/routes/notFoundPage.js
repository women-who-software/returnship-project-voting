import React from "react";
import HeaderLarge from "../Components/Header/HeaderLarge";
import Nav from "../Components/Nav/Nav";
import NotFound from '../Components/Images/not_found.svg'
import Footer from "../Components/Footer/Footer";

export default function NotFoundPage() {
  return (
    <section>
      <HeaderLarge />
      <Nav />
      <div className="notfound">
        <img src={NotFound} alt="Not Found" />
        <div>Page not found. Please use the Navigation Menu to direct you to the correct page.</div>
      </div>
      <Footer />
    </section>
  );
}