const { Router } = require("express");

// Controllers
const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");

const routes = Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.destroy);

module.exports = routes;
