const connection = require("../database/connection");

class IncidentController {
  async index(req, res) {
    try {
      const incidents = await connection("incidents").select("*");

      return res.status(200).json(incidents);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }

  async store(req, res) {
    try {
      const { title, description, value } = req.body;
      const ong_id = req.headers.authorization;

      const [id] = await connection("incidents").insert({
        title,
        description,
        value,
        ong_id
      });

      return res.status(200).json({ id });
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const ong_id = req.headers.authorization;

      const incident = await connection("incidents")
        .where("id", id)
        .select("ong_id")
        .first();

      if (!incident) {
        return res.status(400).json({
          message: "Caso não encontrado"
        });
      }

      if (incident.ong_id != ong_id) {
        return res.status(401).json({
          message: "Operação não permitida"
        });
      }

      await connection("incidents")
        .where("id", id)
        .delete();

      return res.status(204).send();
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new IncidentController();
