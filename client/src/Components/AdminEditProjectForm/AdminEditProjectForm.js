import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import FormHeader from "./FormHeader";
const AdminEditProjectForm = (props) => {
  const { project } = props; //Passed on project based on user click and project_id
  console.log(project);

  const [projectName, setProjectName] = useState({
    value: project.project_name,
    touched: "",
  });
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
    value: project.table_vote,
    touched: "",
  });
  const [membersSignedUp, setMembersSignedUp] = useState({
    value: project.table_signup,
    touched: "",
  });
  console.log(membersVoted.value[0].voter_name);

  // // Get Members Voted Data
  const getMembersVoted = membersVoted.value.map((member) => (
    // console.log(member);
    <tr key={member.project_id}>
      <td className="members_voted__member_data">{member.voter_name}</td>
      <td className="members_voted__member_data">{member.voter_slack_name}</td>
    </tr>
  ));

  const getMembersSignedUp = membersSignedUp.value.map((member) => (
    <tr key={member.project_id}>
      <td className="members_voted__member_data">{member.signup_name}</td>
      <td className="members_voted__member_data">
        {member.signup_github_name}
      </td>
      <td className="members_voted__member_data">{member.signup_email}</td>
    </tr>
  ));
  return (
    <>
      <div
        className="adminEditProjectForm__container"
        key={project.project_id}
        project={project}
      >
        <FormHeader project={project} />
        <form action="" className="" key={project.project_id}>
          <div className="adminEditProjectForm__form_row">
            <div className="adminEditProjectForm__form_col">
              <label htmlFor="">Contact Name</label>
              <input
                className="adminEditProjectForm__contact_info"
                type="text"
                name="client_name"
                defaultValue={clientName.value}
                // onChange={}
              />
              <label htmlFor="">Contact Email</label>
              <input
                className="adminEditProjectForm__contact_info"
                type="text"
                name="client_email"
                defaultValue={clientEmail.value}
                // onChange={}
              />
            </div>
            <div className="adminEditProjectForm__form_row">
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="">Company Name</label>
                <input
                  className="adminEditProjectForm__contact_info"
                  type="text"
                  name="client_company"
                  defaultValue={clientCompany.value}
                  // onChange={}
                />
                <label htmlFor="">
                  Project Start Date <span>xxx-xxx-xxxx</span>
                </label>
                <input
                  className="adminEditProjectForm__contact_info"
                  type="text"
                  name="client_email"
                  defaultValue={startDate.value}
                  // onChange={}
                />
              </div>
            </div>
          </div>
          <div className="adminEditProjectForm__form_row">
            <div className="adminEditProjectForm__form_col">
              <label htmlFor="">Project Description</label>
              <textarea
                className="adminEditProjectForm__textarea"
                name="project_desc"
                rows="8"
                cols="63"
                defaultValue={projectDesc.value}
              ></textarea>
            </div>
          </div>
          {/* Tech Stack */}
          <div className="adminEditProjectForm__form_row">
            <div className="adminEditProjectForm__form_col">
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_python"
                  defaultValue="Python"
                />
                <label htmlFor="langs_langs_python">Python</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_javascript"
                  defaultValue="JavaScript"
                />
                <label htmlFor="langs_javascript">JavaScript</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_java"
                  defaultValue="Java"
                />
                <label htmlFor="langs_java">Java</label>
              </div>
            </div>
            <div className="adminEditProjectForm__form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />{" "}
                <label htmlFor="langs_php">C#</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  defaultValue="PHP"
                />
                <label htmlFor="langs_php">PHP</label>
              </div>
              <div>
                <input type="checkbox" name="langs" id="langs_" value="C++" />
                <label htmlFor="langs_php">C++</label>
              </div>
            </div>
          </div>
          {/* Project Status */}
          <div className="adminEditProjectForm__form_row">
            <div className="adminEditProjectForm__form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />
                <label htmlFor="langs_php">Sign Up</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  value="PHP"
                />{" "}
                <label htmlFor="langs_php">Active</label>
              </div>
            </div>
            <div className="adminEditProjectForm__form_col">
              <div>
                <input type="checkbox" name="langs" id="langs_c#" value="C#" />
                <label htmlFor="langs_php">Open Vote</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="langs"
                  id="langs_php"
                  defaultValue="PHP"
                />
                <label htmlFor="langs_php">Completed</label>
              </div>
            </div>
          </div>
          <div
            className="member_data__container"
            key={project.table_vote.table_vote_id}
          >
            <div className="adminEditProjectForm__form_row">
              <h3 className="adminEditProjectForm__section_header">
                Member Data
              </h3>
            </div>
            <div className="adminEditProjectForm__form_row">
              <span className="adminEditProjectForm__section_sub_header">
                Team Members Voted
              </span>
            </div>
            <table key={project.table_vote.table_vote_id}>
              <thead className="adminEditProjectForm__table_header">
                <tr>
                  <th>
                    <h5>Name</h5>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h5>Slack Handle || Email</h5>
                  </th>
                </tr>
              </thead>
              <tbody key={project.table_vote.table_vote_id}>
                {getMembersVoted}
                <tr className="adminEditProjectForm__horizontal_line"></tr>
                {getMembersSignedUp}
              </tbody>
            </table>
            <div className="adminEditProjectForm__form_row">
              <span className="adminEditProjectForm__section_sub_header">
                Team Members Signed Up
              </span>
            </div>
            <table>
              <thead className="adminEditProjectForm__table_header">
                <tr>
                  <th>
                    <h5>Name</h5>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h5>GitHub Handle</h5>
                  </th>
                </tr>
                <tr>
                  <th>
                    <h5>Email</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="adminEditProjectForm__horizontal_line"></tr>
                {getMembersSignedUp}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminEditProjectForm;
