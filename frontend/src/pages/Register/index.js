import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, InputGroup } from "./styles";

import Link from "../../components/Link";
import Button from "../../components/Button";
import Input from "../../components/Input";

import logoImg from "../../assets/logo.svg";

function Register() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da saua ONG.
          </p>
          <Link to="/">
            <>
              <FiArrowLeft size={18} color="#E02041" />
              Já tenho cadastro
            </>
          </Link>
        </section>
        <form>
          <Input placeholder="Nome da ONG" />
          <Input placeholder="E-mail" type="email" />
          <Input placeholder="WhatsApp" />
          <InputGroup>
            <Input placeholder="Cidade" />
            <Input placeholder="UF" style={{ width: 80 }} />
          </InputGroup>
          <Button type="submit">Cadastrar</Button>
        </form>
      </Content>
    </Container>
  );
}

export default Register;
