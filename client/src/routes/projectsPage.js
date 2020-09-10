import React from "react";
import HeaderLarge from "../Components/Header/HeaderLarge";
import Nav from "../Components/Nav/Nav";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";

export default function ProjectsPage() {
  return (
    <section>
      <HeaderLarge />
      <Nav />

      <div className="projects">
        <h1 className="projects__header">Project List:</h1>

        <div className="projects__about">
          <div>How to be involved in WWC Returnship:</div>
          <ol>
            <li>Read about Projects and details.</li>
            <li>
              An <strong>open project</strong> is available for voting. Vote in
              projects you are interested in.
            </li>
            <li>
              Once enough votes are received, a project is open to{" "}
              <strong>accepting new members</strong>.
            </li>
            <li>
              Once enough members are signed up for a project, a project is{" "}
              <strong>open for development</strong>.
            </li>
            <li>
              In development projects may still accept members.{" "}
              <strong>contact us</strong> to find out how to get invloved.
            </li>
          </ol>
        </div>
      </div>

      <Projects />
      <Footer />
    </section>
  );
}
