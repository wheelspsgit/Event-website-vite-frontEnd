const STUDENT_BASE = "http://localhost:8080/api/v1/Student/";

const studentEndpoints = {
  getEventsList: `${STUDENT_BASE}GetEventsList`,
  createProfile: `${STUDENT_BASE}CreateStudentProfile`,
};

export default studentEndpoints;
