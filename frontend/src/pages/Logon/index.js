import React from "react";
import { FiLogIn } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Link from "../../components/Link";

function Logon() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Be the hero" />
        <form>
          <h1>Faça seu logon</h1>

          <Input placeholder="Sua ID" />
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
