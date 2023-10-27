import { instance } from "./connect";

//auth
export const registerUser = async (username, email, password) => {
  const res = await instance.post("/api/v1/auth/register", {
    username,
    email,
    password,
  });
  return res;
};

export const loginUser = async (username, password) => {
  const res = await instance.post("/api/v1/auth/login", {
    username,
    password,
  });
  return res;
};

export const getUserProfile = async (username, token) => {
  const res = await instance.get(`/api/v1/auth/user-profile/${username}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const updateUserProfile = async (profile, token) => {
  const res = await instance.put("/api/v1/auth/updateuser", profile, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

//Tasks
export const getAllTasks = async (token) => {
  const res = await instance.get("/api/v1/manage/tasks", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
};

export const addTask = async (token) => {
  const res = await instance.post("/api/v1/manage/createTask", {
    headers: { Authorization: `Bearer${token}` },
  });
  return res;
};
