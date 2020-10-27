import React, { useContext } from "react";
import HeaderSmall from "../Components/Header/HeaderSmall";
import Nav from "../Components/Nav/Nav";
import Projects from "../Components/Projects/Projects";
import Footer from "../Components/Footer/Footer";
import Search from "../Components/Search/Search";
import { GlobalContext } from "../Context/GlobalContext";

export default function ProjectsPage() {
  const { search, setSearch } = useContext(GlobalContext);

  return (
    <section>
      <HeaderSmall />
      <Nav />

      <div className="projects">
        <div className="projects__search">
          <Search setSearchValue={setSearch} />
        </div>

        <h1 className="projects__header">Project List:</h1>

        <div className="projects__about">
          <div className="projects__about-title">
            How to be involved in WWC Returnship:
          </div>
          <ol>
            <li>Read about Projects and details.</li>
            <li>
              An <strong>Open Vote</strong> project is available for voting.
              Vote on projects you are interested in.
            </li>
            <li>
              Once enough votes are received, you can <strong>Sign Up</strong>{" "}
              for projects.
            </li>
            <li>
              Once enough members are signed up for a project, a project is{" "}
              <strong>Active</strong>.
            </li>
            <li>
              In development projects may still accept members.{" "}
              <strong>contact us</strong> to find out how to get invloved.
            </li>
          </ol>
        </div>
        <Projects />
      </div>

      <Footer />
    </section>
  );
}
