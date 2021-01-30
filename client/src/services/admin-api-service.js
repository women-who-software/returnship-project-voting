import config from "../config";
import TokenService from "./token-service";

const AdminApiService = {
  createAdmin(admin) {
    return fetch(config.API_ENDPOINT_ADMIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(admin),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getByName(admin_name) {
    return fetch(config.API_ENDPOINT_ADMIN + `/${admin_name}`, {
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
  updateAdmin(updatedAdmin) {
    const url = config.API_ENDPOINT_ADMIN + `/${updatedAdmin.admin_name}`;

    return fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedAdmin)
    })
  },
  deleteAdmin(admin_name) {
    return fetch(config.API_ENDPOINT_ADMIN + `/${admin_name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
      }
    })
  }
};

export default AdminApiService;
