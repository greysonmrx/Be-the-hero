import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";
import api from "../../services/api";

function Logon() {
  const history = useHistory();

  const [id, setId] = useState("");

  async function handleLogon(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      toast.success(`Seja bem-vinda, ${response.data.name}`);

      history.push("/profile");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be the hero" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <Input placeholder="Sua ID" onChange={e => setId(e.target.value)} />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <>
              <FiLogIn size={16} color="#E02041" />
              Não tenho cadastro
            </>
          </Link>
        </form>
      </Content>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
}

export default Logon;
