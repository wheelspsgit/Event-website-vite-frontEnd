import authEndpoints from "./auth";
import userEndpoints from "./user";
import cityEndpoints from "./city";
import eventEndpoints from "./event";
import studentEndpoints from "./student";
import instructorEndpoints from "./instructor";

const endpoints = {
  auth: authEndpoints,
  user: userEndpoints,
  city: cityEndpoints,
  event: eventEndpoints,
  student: studentEndpoints,
  instructor: instructorEndpoints,
};

export default endpoints;
