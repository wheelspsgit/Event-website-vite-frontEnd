const AUTH_BASE = "http://localhost:8080/api/v1/auth/";

const authEndpoints = {
  login: `${AUTH_BASE}login`, // Use lowercase 'login'
  registerStudent: `${AUTH_BASE}studentSignUp`, // Follow consistent casing
  addAdmin: `${AUTH_BASE}addAdmin`,
  addTeacher: `${AUTH_BASE}addTeacher`,
  addOrganization: `${AUTH_BASE}addOrganization`,
};

export default authEndpoints;
