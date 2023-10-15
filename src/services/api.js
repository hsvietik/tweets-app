import axios from "axios";

axios.defaults.baseURL = "https://6529202d55b137ddc83e3c68.mockapi.io/api";

export const fetchUsers = async () => {
  const response = axios.get(`/users`);
  return response;
};

export const updateUser = async (id, user) => {
  const response = axios.put(`/users/${id}`, user);
  return response;
};
