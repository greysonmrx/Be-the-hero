const connection = require("../database/connection");

class ProfileController {
  async index(req, res) {
    try {
      const ong_id = req.headers.authorization;

      const incidents = await connection("incidents")
        .where("ong_id", ong_id)
        .select("*");

      return res.status(200).json(incidents);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new ProfileController();
