import React from "react";

import {
  Container,
  Header,
  Img,
  HeaderText,
  Strong,
  Title,
  Description
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
    </Container>
  );
}

export default Incidents;
