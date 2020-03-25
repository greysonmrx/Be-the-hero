const connection = require("../database/connection");

class IncidentController {
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
}

module.exports = new IncidentController();
