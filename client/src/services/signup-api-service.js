import config from "../config";
import TokenService from "./token-service";

const SignupApiService = {
  getAll() {
    return fetch(config.API_ENDPOINT_SIGNUP, {
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
  addSignup(newSignup) {
    return fetch(config.API_ENDPOINT_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newSignup)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getById(signup_id) {
    return fetch(config.API_ENDPOINT_SIGNUP + `/${signup_id}`, {
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
  updateSignup(updatedSignup) {
    const url = config.API_ENDPOINT_SIGNUP + `/${updatedSignup.signup_id}`;

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedSignup)
    })
  },
  deleteSignup(signup_id) {
    return fetch(config.API_ENDPOINT_SIGNUP + `/${signup_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
  },
  getAllProjectsById(project_id) {
    return fetch(config.API_ENDPOINT_SIGNUP + `/project/${project_id}`, {
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
};

export default SignupApiService;
