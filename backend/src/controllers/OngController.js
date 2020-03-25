const crypto = require("crypto");
const connection = require("../database/connection");

class OngController {
  async index(req, res) {
    try {
      const ongs = await connection("ongs").select("*");

      return res.status(200).json(ongs);
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
  async store(req, res) {
    try {
      const { name, email, whatsapp, city, uf } = req.body;

      const id = crypto.randomBytes(4).toString("hex");

      await connection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });

      return res.status(200).json({ id });
    } catch (err) {
      return res.status(400).json({
        message: "Operação indisponível"
      });
    }
  }
}

module.exports = new OngController();
