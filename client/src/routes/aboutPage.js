import React from "react";
import HeaderLarge from "../Components/Header/HeaderLarge";
import Nav from "../Components/Nav/Nav";
import About from '../Components/About/About';
import Footer from "../Components/Footer/Footer";

export default function AboutPage() {
  return (
    <section>
      <HeaderLarge />
      <Nav />
      <About />
      <Footer />
    </section>
  );
}
