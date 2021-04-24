import React, { useContext } from "react";
import Projects from "../../Components/User/Projects/Projects";
import Search from "../../Components/User/Search/Search";
import { GlobalContext } from "../../Context/GlobalContext";

export default function ProjectsPage() {
  const { search, setSearch } = useContext(GlobalContext);

  return (
    <section>
      <div className="projects">
        <div className="projects__search">
          <Search setSearchValue={setSearch} />
        </div>

        <h1 className="projects__header">Project List:</h1>

        <div className="projects__about">
          <div className="projects__about-title">
            How to be involved in <strong>ProjectHUB</strong>:
          </div>
          <ol>
            <li>Read about Projects and details.</li>
            <li>
              An <strong>Open Vote</strong> project is available for voting. You
              can <strong>vote for 2 different projects</strong>.
            </li>
            <li>
              Once enough votes are received, a project becomes an{" "}
              <strong>Open Project</strong>. You can <strong>Sign Up</strong>{" "}
              for 2 different projects.
            </li>
            <li>
              Once enough members are signed up for a project, a project becomes{" "}
              <strong>Active</strong>.
            </li>
            <li>
              <strong>Active</strong> projects may still accept members,{" "}
              <strong>contact us</strong> to find out how to get involved.
            </li>
          </ol>
        </div>
        <div className="projects__details">
          <Projects />
        </div>
      </div>
    </section>
  );
}
