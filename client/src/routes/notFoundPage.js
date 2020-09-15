import React from "react";
import HeaderLarge from "../Components/Header/HeaderLarge";
import Nav from "../Components/Nav/Nav";
import NotFound from '../Components/Images/not_found.png';

export default function NotFoundPage() {
  return (
    <section>
      <HeaderLarge />
      <Nav />
      <div className="notfound">
        <div className="notfound__img">
          <img src={NotFound} alt="404 Not Found" />
        </div>
        <div className="notfound__text">
          Page not found. Please use the Navigation Menu to direct you to the
          correct page.
        </div>
      </div>
    </section>
  );
}
