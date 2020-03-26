import React from "react";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  Header,
  Img,
  BackButton,
  Incident,
  Property,
  Value,
  ContactBox,
  HeroTitle,
  HeroDescription,
  Actions,
  Action,
  ActionText
} from "./styles";

import logoImg from "../../assets/logo.png";

function Detail() {
  return (
    <Container>
      <Header>
        <Img source={logoImg} />
        <BackButton onPress={() => {}}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </BackButton>
      </Header>
      <Incident>
        <Property style={{ marginTop: 0 }}>ONG:</Property>
        <Value>APAPI</Value>
        <Property>CASO:</Property>
        <Value>Cadelinha atropelada</Value>
        <Property>VALOR:</Property>
        <Value>R$ 120,00</Value>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato: </HeroDescription>
        <Actions>
          <Action onPress={() => {}}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={() => {}}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

export default Detail;
