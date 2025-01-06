const EVENT_BASE = "http://localhost:8080/api/v1/Event/";

const eventEndpoints = {
  getEventsList: `${EVENT_BASE}GetEventsList`,
  createEvent: `${EVENT_BASE}createEvent`,
};

export default eventEndpoints;
