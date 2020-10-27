import React from "react";
// import Header from "../Components/Header/Header";
import Nav from "../Components/Nav/Nav";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";

export default function ProjectsPage() {
  return (
    <section>
      {/* <Header /> */}
      <Nav />

      <div className="projects">
        <h1 className="projects__header">Project List:</h1>

        <div className="projects__about">
          <h2 className="projects__about-header">How Projects work:</h2>
          <ol>
            <li>Read about Projects and details.</li>
            <li>Open Project is available for voting.</li>
            <li>
              Once enough votes are received, a project is open for members to
              sign up.
            </li>
            <li>
              In progress projects may still accept members, contact is to find
              out.
            </li>
          </ol>
        </div>
        <Projects />
      </div>

      <Footer />
    </section>
  );
}
