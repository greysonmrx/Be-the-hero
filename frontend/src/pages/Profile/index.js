import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";

function Profile() {
  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vinda, APAPI</span>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$ 120.00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}

export default Profile;
