import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { toast } from "react-toastify";

import { Container, Content, ButtonGroup } from "./styles";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Link from "../../components/Link";
import TextArea from "../../components/TextArea";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

function NewIncident() {
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { title, description, value };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      toast.success("Caso criado com sucesso");

      history.push("/profile");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

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
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Título do caso"
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Descrição"
            type="email"
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            onChange={e => setValue(e.target.value)}
          />
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
