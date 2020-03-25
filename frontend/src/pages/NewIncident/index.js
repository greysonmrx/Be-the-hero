import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, ButtonGroup } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import TextArea from "../../components/TextArea";

import logoImg from "../../assets/logo.svg";

function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logoImg} alt="Be the hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isto.
          </p>
          <Link to="/profile">
            <>
              <FiArrowLeft size={18} color="#E02041" />
              Voltar para home
            </>
          </Link>
        </section>
        <form>
          <Input placeholder="Título do caso" />
          <TextArea placeholder="Descrição" type="email" />
          <Input placeholder="Valor em reais" />
          <ButtonGroup>
            <RouterLink to="/profile">Cancelar</RouterLink>
            <Button type="submit">Cadastrar</Button>
          </ButtonGroup>
        </form>
      </Content>
    </Container>
  );
}

export default NewIncident;
