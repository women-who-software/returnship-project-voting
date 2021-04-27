import config from "../config";
import STORE from "../STORE";

const ProjectsApiService = {
  getAll() {
    // return fetch(config.API_ENDPOINT_PROJECTS, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((res) =>
    //   !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    // );
    return STORE.Project;
  },
};

export default ProjectsApiService;
