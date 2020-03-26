import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";

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
  const navigation = useNavigation();
  const message =
    'Olá APAPI, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de R$ 120,00.';

  function navigateToBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha atropelada",
      recipients: ["greysonmrx@gmail.com"],
      body: message
    });
  }

  return (
    <Container>
      <Header>
        <Img source={logoImg} />
        <BackButton onPress={navigateToBack}>
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
          <Action onPress={sendMail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}

export default Detail;
