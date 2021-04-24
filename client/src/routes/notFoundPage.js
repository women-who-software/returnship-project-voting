import React from "react";
import NotFound from "../Components/Images/not_found.png";

export default function NotFoundPage() {
  return (
    <section className="notfound">
      <div className="notfound__img">
        <img src={NotFound} alt="404 Not Found" />
      </div>
      <div className="notfound__text">
        Sorry! Looks like a bug found its way to our website and ate the page
        you are looking for.
      </div>
      <div className="notfound__link">
        <a href="/">Go back to home page</a> or{" "}
        <a href="https://career-returnship.netlify.app/contactUs/">
          let us know
        </a>
      </div>
    </section>
  );
}
