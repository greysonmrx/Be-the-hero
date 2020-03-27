import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";

import {
  Container,
  Header,
  Img,
  HeaderText,
  Strong,
  Title,
  Description,
  IncidentList,
  Incident,
  Property,
  Value,
  DetailsButton,
  DetailsButtonText
} from "./styles";

import api from "../../services/api";
import logoImg from "../../assets/logo.png";

function Incidents() {
  const navigation = useNavigation();

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadIncidents();
  }, []);

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    try {
      const response = await api.get("/incidents");

      setIncidents(response.data);
      setTotal(response.headers["x-total-count"]);
    } catch (err) {
      Alert.alert(err.response.data.message);
    }
  }

  return (
    <Container>
      <Header>
        <Img source={logoImg} />
        <HeaderText>
          Total de <Strong>{total} casos</Strong>.
        </HeaderText>
      </Header>
      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Incident>
            <Property>ONG:</Property>
            <Value>{item.name}</Value>
            <Property>CASO:</Property>
            <Value>{item.title}</Value>
            <Property>VALOR:</Property>
            <Value>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </Value>

            <DetailsButton onPress={() => navigateToDetail(item)}>
              <DetailsButtonText>Ver mais detalhes</DetailsButtonText>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </DetailsButton>
          </Incident>
        )}
      />
    </Container>
  );
}

export default Incidents;
