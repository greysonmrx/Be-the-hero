import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { Container } from "./styles";

import logoImg from "../../assets/logo.svg";
import { toast } from "react-toastify";
import api from "../../services/api";

function Profile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    handleGetIncidents();
  }, [ongId]);

  async function handleGetIncidents() {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(response.data);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }

  return (
    <Container>
      <header>
        <img src={logoImg} alt="Be the hero" />
        <span>Bem vinda, {ongName}</span>
        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Profile;
