import config from "../config";
import TokenService from "./token-service";

const VoteApiService = {
  getAll() {
    return fetch(config.API_ENDPOINT_VOTE, {
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
  addVote(newVote) {
    return fetch(config.API_ENDPOINT_VOTE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newVote)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getById(vote_id) {
    return fetch(config.API_ENDPOINT_VOTE + `/${vote_id}`, {
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
  updateVote(updatedVote) {
    const url = config.API_ENDPOINT_VOTE + `/${updatedVote.vote_id}`;

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedVote)
    })
  },
  deleteVote(vote_id) {
    return fetch(config.API_ENDPOINT_VOTE + `/${vote_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
  },
  getAllProjectsById() {
    return fetch(config.API_ENDPOINT_VOTE + `/project/${project_id}`, {
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

export default VoteApiService;
