import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import FormHeader from "./FormHeader";
const AdminEditProjectForm = (props) => {
  const { project } = props; //Passed on project based on user click and project_id
  console.log(project);

  // const [projectName, setProjectName] = useState({
  //   value: project.project_name,
  //   touched: "",
  // });
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
    <tr key={project.table_vote.table_vote_id} project={project}>
      <td className="members_voted__member_data">{member.voter_name}</td>
      <td className="members_voted__member_data">{member.voter_slack_name}</td>
      <td className="members_voted__member_data">{member.voter_email}</td>
    </tr>
  ));

  const getMembersSignedUp = membersSignedUp.value.map((member) => (
    <tr key={project.project_id} project={project}>
      <td className="members_voted__member_data">{member.signup_name}</td>
      <td className="members_voted__member_data">
        {member.signup_github_name}
      </td>
      <td className="members_voted__member_data">{member.signup_email}</td>
    </tr>
  ));
  return (
    <>
      <div className="adminEditProjectForm__container">
        <FormHeader project={project} />
        <div className="adminEditProjectForm__form_container_col">
          <form
            action=""
            className="adminEditProjectForm__form"
            key={project.project_id}
          >
            <div className="adminEditProjectForm__form_row adminEditProjectForm__contact_info">
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="contact_name">Contact Name</label>
                <input
                  className="adminEditProjectForm__contact_input"
                  type="text"
                  name="client_name"
                  defaultValue={clientName.value}
                  // onChange={}
                />
              </div>
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="contact_email">Contact Email</label>
                <input
                  className="adminEditProjectForm__contact_input"
                  type="text"
                  name="client_email"
                  defaultValue={clientEmail.value}
                  // onChange={}
                />
              </div>
            </div>
            <div className="adminEditProjectForm__form_row adminEditProjectForm__company_info">
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="company_name">Company Name</label>
                <input
                  className="adminEditProjectForm__contact_input"
                  type="text"
                  name="client_company"
                  defaultValue={clientCompany.value}
                  // onChange={}
                />
              </div>
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="project_start_date">
                  Project Start Date <span>xxx-xxx-xxxx</span>
                </label>
                <input
                  className="adminEditProjectForm__contact_input"
                  type="text"
                  name="client_email"
                  defaultValue={startDate.value}
                  // onChange={}
                />
              </div>
            </div>
            <div className="adminEditProjectForm__form_row">
              <div className="adminEditProjectForm__form_col">
                <label htmlFor="project_desc">Project Description</label>
                <textarea
                  className="adminEditProjectForm__textarea"
                  name="project_desc"
                  rows="8"
                  cols="49"
                  defaultValue={projectDesc.value}
                ></textarea>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="adminEditProjectForm__form_row adminEditProjectForm__checkbox_squares">
              <div className="adminEditProjectForm__form_col adminEditProjectForm__project_tech_container">
                <span className="adminEditProjectForm__tech_stack_header">
                  Tech Stack
                </span>
                <div className="adminEditProjectForm__form_container_square">
                  <div className="adminEditProjectForm__form_row adminEditProjectForm__square_row">
                    <div className="adminEditProjectForm__form_col adminEditProjectForm__square_col">
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_python"
                          defaultValue="Python"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_python">Python</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_javascript"
                          defaultValue="JavaScript"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_javascript">JavaScript</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_java"
                          defaultValue="Java"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_java">Java</label>
                      </div>
                    </div>
                    <div className="adminEditProjectForm__form_col">
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_c#"
                          defaultValue="C#"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_c#">C#</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_php"
                          defaultValue="PHP"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_php">PHP</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          name="langs"
                          id="langs_c++"
                          defaultValue="C++"
                          className="adminEditProjectForm__input_checkbox"
                        />
                        <label htmlFor="langs_c++">C++</label>
                      </div>
                    </div>
                  </div>
                  <div className="adminEditProjectForm__form_row adminEditProjectForm__lang_add_row">
                    <input
                      className="adminEditProjectForm__lang_input"
                      type="text"
                      name="new_language"
                      placeholder="Language"
                      // onChange={}
                    />
                    <button className="adminEditProjectForm__lang_add_btn">
                      Add
                    </button>
                  </div>
                </div>
              </div>
              {/* Project Status */}
              <div className="adminEditProjectForm__form_col adminEditProjectForm__project_status_container">
                <div className="adminEditProjectForm__form_col">
                  <span className="adminEditProjectForm__tech_stack_header">
                    Status
                  </span>
                  <div className="adminEditProjectForm__form_container_square">
                    <div className="adminEditProjectForm__form_row adminEditProjectForm__square_row">
                      <div className="adminEditProjectForm__form_col adminEditProjectForm__square_col">
                        <div>
                          <input
                            type="checkbox"
                            name="status"
                            id="status_sign_up"
                            defaultValue="Sign Up"
                            className="adminEditProjectForm__input_checkbox"
                          />
                          <label htmlFor="status_sign_up">Sign Up</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="status"
                            id="status_active"
                            defaultValue="Active"
                            className="adminEditProjectForm__input_checkbox"
                          />
                          <label htmlFor="status_active">Active</label>
                        </div>
                      </div>
                      <div className="adminEditProjectForm__form_col">
                        <div>
                          <input
                            type="checkbox"
                            name="status"
                            id="status_open_vote"
                            defaultValue="Open Vote"
                            className="adminEditProjectForm__input_checkbox"
                          />
                          <label htmlFor="status_open_vote">Open Vote</label>
                        </div>
                        <div>
                          <input
                            type="checkbox"
                            name="status"
                            id="status_completed"
                            defaultValue="Completed"
                            className="adminEditProjectForm__input_checkbox"
                          />
                          <label htmlFor="status_completed">Completed</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Member Data */}
            <div className="memberData__container">
              <div className="adminEditProjectForm__form_row">
                <h5 className="adminEditProjectForm__section_header">
                  Member Data
                </h5>
              </div>
              <div className="adminEditProjectForm__form_row">
                <span className="adminEditProjectForm__section_sub_header">
                  Team Members Voted
                </span>
              </div>
              <table>
                <thead className="adminEditProjectForm__table_header">
                  <tr>
                    <th>
                      <h5>Name</h5>
                    </th>
                    <th>
                      <h5>Slack Handle</h5>
                    </th>
                    <th>
                      <h5>Email</h5>
                    </th>
                  </tr>
                </thead>
                <tbody key={project.project_id}>
                  {getMembersVoted}
                  <tr className="adminEditProjectForm__horizontal_line"></tr>
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
                    <th>
                      <h5>GitHub Handle</h5>
                    </th>
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
      </div>
    </>
  );
};

export default AdminEditProjectForm;
