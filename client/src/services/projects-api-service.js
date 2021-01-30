import config from "../config";
import TokenService from "./token-service";

const ProjectsApiService = {
  getAll() {
    return fetch(config.API_ENDPOINT_PROJECTS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  addProject(newProject) {
    return fetch(config.API_ENDPOINT_PROJECTS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newProject)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getById(project_id) {
    return fetch(config.API_ENDPOINT_PROJECTS + `/${project_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  updateProject(updatedProject) {
    const url = config.API_ENDPOINT_PROJECTS + `/${updatedProject.project_id}`;

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedProject)
    })
  },
  deleteProject(project_id) {
    return fetch(config.API_ENDPOINT_PROJECTS + `/${project_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
  }
};

export default ProjectsApiService;
