const { Router } = require("express");

// Controllers
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");

const routes = Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.post("/incidents", IncidentsController.store);

module.exports = routes;
