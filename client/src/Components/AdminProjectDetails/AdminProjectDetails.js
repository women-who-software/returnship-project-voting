// Import React Packages
import React, { useContext } from "react";

// Import Custom Components
import AdminPanelHeader from "../AdminPanelHeader/AdminPanelHeader";
import SideBar from "../SideBar/SideBar";
import AdminEditProjectForm from "../AdminEditProjectForm/AdminEditProjectForm";

export default function AdminProjectDetails(props) {
  const { project } = props;
  console.log(`project_props:`, project);
  return (
    <>
      <AdminPanelHeader />
      <div className="admin_project_details__sideBar_row admin_project_details__container">
        <div className="admin_project_details__sideBar_col">
          <SideBar />
        </div>
        <div className="admin_project_details__sideBar_col admin_project_details__form_container">
          <AdminEditProjectForm
            project={project}
            // key={project.project_id} // TODO: Remove?
          />
        </div>
      </div>
    </>
  );
}

// {/* <section className="">
//   <Container>
//     <Row>
//       <h2>{project.project_name}</h2>
//     </Row>

//     <Form>
//       {/* Short Description Input */}
//       <Form.Group as={Row} controlId="formShortDesc">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Short Description</Form.Label>
//         </Col>

//         <Col sm={8}>
//           <Form.Control type="text" defaultValue={project.short_desc} />
//         </Col>
//       </Form.Group>
//       {/* Long Description Input */}
//       <Form.Group as={Row} controlId="formLongDesc">
//         <Col sm={3}>
//           <Form.Label>Long Description</Form.Label>
//         </Col>
//         <Col sm={8}>
//           <Form.Control
//             as="textarea"
//             rows="3"
//             defaultValue={project.long_desc}
//           />
//         </Col>
//       </Form.Group>
//       {/* Contact Input */}
//       <Form.Group as={Row} controlId="formContact">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Contact</Form.Label>
//         </Col>

//         <Col sm={8}>
//           <Form.Control type="text" defaultValue={project.contact} />
//         </Col>
//       </Form.Group>
//       {/* Company Input */}
//       <Form.Group as={Row} controlId="formCompany">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Company</Form.Label>
//         </Col>

//         <Col sm={8}>
//           <Form.Control type="text" defaultValue={project.company} />
//         </Col>
//       </Form.Group>
//       {/* Tech Stack Input */}
//       <Form.Group as={Row} controlId="formContact">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Tech Stack</Form.Label>
//         </Col>
//         <Col sm={8}>
//           <Form.Control as="select" multiple>
//             <option>JavaScript</option>
//             <option>Python</option>
//             <option>3</option>
//             <option>4</option>
//             <option>5</option>
//           </Form.Control>
//           <Form.Text className="text-muted">
//             Use command on a mac or the space-bar on a windows machine to select
//             multiple technologies.
//           </Form.Text>
//         </Col>
//       </Form.Group>
//       {/* Status Input */}
//       <Form.Group as={Row} controlId="formStatus">
//         <Col sm={3} className="d-flex align-items-start">
//           <Form.Label>Status</Form.Label>
//         </Col>

//         <Col sm={8} className="d-flex align-items-start">
//           <fieldset>
//             <Form.Check
//               type="radio"
//               label="Open to New Members"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios2"
//               className="d-flex align-items-center"
//             />
//             <Form.Check
//               type="radio"
//               label="In Development"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios3"
//               className="d-flex align-items-center"
//             />
//             <Form.Check
//               type="radio"
//               label="Closed"
//               name="formHorizontalRadios"
//               id="formHorizontalRadios3"
//               className="d-flex align-items-center"
//             />
//           </fieldset>
//         </Col>
//       </Form.Group>
//       {/* Interested Team Members Input */}
//       <Form.Group as={Row} controlId="formIntMem">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Interested Team Members</Form.Label>
//         </Col>
//         <Col sm={8}></Col>
//       </Form.Group>
//       {/* Team Members */}
//       <Form.Group as={Row} controlId="formIntMem">
//         <Col sm={3} className="d-flex align-items-end">
//           <Form.Label>Team Members</Form.Label>
//         </Col>
//         <Col sm={8}></Col>
//       </Form.Group>
//       <Row className="d-flex justify-content-end">
//         <Button type="submit" className="mb-2">
//           Submit
//         </Button>
//       </Row>
//     </Form>
//   </Container>
// </section>; */}
