import React from "react";
import { Feather } from "@expo/vector-icons";
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

import logoImg from "../../assets/logo.png";

function Incidents() {
  return (
    <Container>
      <Header>
        <Img source={logoImg} />
        <HeaderText>
          Total de <Strong>0 casos</Strong>.
        </HeaderText>
      </Header>
      <Title>Bem-vindo</Title>
      <Description>Escolha um dos casos abaixo e salve o dia.</Description>

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={incident => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <Property>ONG:</Property>
            <Value>APAPI</Value>
            <Property>CASO:</Property>
            <Value>Cadelinha atropelada</Value>
            <Property>VALOR:</Property>
            <Value>R$ 120,00</Value>

            <DetailsButton onPress={() => {}}>
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
