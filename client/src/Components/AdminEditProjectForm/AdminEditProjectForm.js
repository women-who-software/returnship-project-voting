import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
const AdminEditProjectForm = (props) => {
  const { project } = props; //Passed on project based on user click and project_id
  console.log(project);

  const [clientName, setClientName] = useState({
    value: project.client_name || "", //pulls in from temp data
    touched: "",
  });
  const [clientEmail, setClientEmail] = useState({
    value: project.client_email || "",
    touched: "",
  });
  const [clientCompany, setClientCompany] = useState({
    value: project.client_company,
    touched: "",
  });
  const [startDate, setStartDate] = useState({ value: project.date });
  const [projectDesc, setProjectDesc] = useState({
    value: project.project_desc,
    touched: "",
  });
  const [techStack, setTechStack] = useState({
    value: project.tech_stack,
    touched: "",
  });
  const [membersVoted, setMembersVoted] = useState({
    value: project.members_voted,
    touched: "",
  });
  const [membersSignedUp, setMembersSignedUp] = useState({
    value: project.members_signed_up,
    touched: "",
  });

  return (
    <>
      <h2>{clientName.value}</h2>
      <div className="adminEditProjectForm_container">
        <form action="" className="">
          <div className="adminEditProjectForm_form_row">
            <div className="adminEditProjectForm_form_col">
              <label>Contact Name</label>
              <input
                type="text"
                name="client_name"
                value={clientName.value}
                // onChange={}
              />
              <label>Contact Email</label>
              <input
                type="text"
                name="client_email"
                value={clientEmail.value}
                // onChange={}
              />
            </div>
            <div className="adminEditProjectForm_form_row">
              <div className="adminEditProjectForm_form_col">
                <label>Company Name</label>
                <input
                  type="text"
                  name="client_company"
                  value={clientCompany.value}
                  // onChange={}
                />
                <label>
                  Project Start Date <span>xxx-xxx-xxxx</span>
                </label>
                <input
                  type="text"
                  name="client_email"
                  value={startDate.value}
                  // onChange={}
                />
              </div>
            </div>
          </div>
          <div className="adminEditProjectForm_form_row">
            <div className="adminEditProjectForm_form_col">
              <label>Project Description</label>
              <textarea
                name="project_desc"
                rows="8"
                cols="63"
                value={projectDesc.value}
              >
                It was a dark and stormy night...
              </textarea>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="adminEditProjectForm_form_row">
            <div className="adminEditProjectForm_form_col">
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_python"
                  value="Python"
                />
                <label for="langs_langs_python">Python</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_javascript"
                  value="JavaScript"
                />
                <label for="langs_javascript">JavaScript</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_java"
                  value="Java"
                />
                <label for="langs_java">Java</label>
              </div>
            </div>
            <div className="adminEditProjectForm_form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />{" "}
                <label for="langs_php">C#</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  value="PHP"
                />{" "}
                <label for="langs_php">PHP</label>
              </div>{" "}
              <div>
                <input type="checkbox" name="langs" id="langs_" value="C++" />
                <label for="langs_php">C++</label>
              </div>
            </div>
          </div>
          {/* Project Status */}
          <div className="adminEditProjectForm_form_row">
            <div className="adminEditProjectForm_form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />
                <label for="langs_php">Sign Up</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  value="PHP"
                />{" "}
                <label for="langs_php">Active</label>
              </div>
            </div>
            <div className="adminEditProjectForm_form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />
                <label for="langs_php">Open Vote</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  value="PHP"
                />{" "}
                <label for="langs_php">Completed</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminEditProjectForm;
