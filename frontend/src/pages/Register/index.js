import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import { Container, Content, InputGroup } from "./styles";

import api from "../../services/api";

import Link from "../../components/Link";
import Button from "../../components/Button";
import Input from "../../components/Input";

import logoImg from "../../assets/logo.svg";

function Register() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  async function handleRegister(event) {
    event.preventDefault();

    const data = { name, email, whatsapp, city, uf };

    try {
      const response = await api.post("/ongs", data);

      toast.success(`Seu ID de acesso: ${response.data.id}`);
    } catch (err) {
      toast.error(err.response.data.message);
    }

    history.push("/");
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>
          <Link to="/">
            <>
              <FiArrowLeft size={18} color="#E02041" />
              Voltar para o logon
            </>
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            placeholder="WhatsApp"
            onChange={e => setWhatsapp(e.target.value)}
          />
          <InputGroup>
            <Input
              placeholder="Cidade"
              onChange={e => setCity(e.target.value)}
            />
            <Input
              placeholder="UF"
              style={{ width: 80 }}
              onChange={e => setUf(e.target.value)}
            />
          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Register;
