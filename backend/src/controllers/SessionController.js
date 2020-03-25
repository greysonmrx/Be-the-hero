const connection = require("../database/connection");

class SessionController {
  async store(req, res) {
    try {
      const { id } = req.body;
      const ong = await connection("ongs")
        .where("id", id)
        .select("name")
        .first();

      if (!ong) {
        return res
          .status(400)
          .json({ message: "Nenhuma ONG foi encontrada com esse id" });
      }

      return res.status(200).json(ong);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new SessionController();
