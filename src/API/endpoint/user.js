const USER_BASE = "http://localhost:8080/api/v1/User/";

const userEndpoints = {
  getUser: `${USER_BASE}GetUser`,
  getCurrentUser: `${USER_BASE}CurrentUserInfo`,
  updateCurrentUser: `${USER_BASE}UpdateCurrentUser`,
  deleteUser: `${USER_BASE}DeleteUser`,
  updateUser: `${USER_BASE}updateUser`,
  addPicture: `${USER_BASE}AddPicture`,
  updateProfilePicture: `${USER_BASE}UpdateProfilePicture`,
};

export default userEndpoints;
