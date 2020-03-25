const { Router } = require("express");

// Controllers
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = Router();

routes.post("/sessions", SessionController.store);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.destroy);

routes.get("/profile", ProfileController.index);

module.exports = routes;
