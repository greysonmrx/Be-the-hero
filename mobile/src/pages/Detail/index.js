import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import * as MailComposer from "expo-mail-composer";
import { Linking } from "react-native";

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
  const route = useRoute();

  const incident = route.params.incident;
  const value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value);
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${value}.`;

  function navigateToBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`
    );
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
        <Value>
          {incident.name} de {incident.city} / {incident.uf}
        </Value>
        <Property>CASO:</Property>
        <Value>{incident.title}</Value>
        <Property>VALOR:</Property>
        <Value>{value}</Value>
      </Incident>
      <ContactBox>
        <HeroTitle>Salve o dia!</HeroTitle>
        <HeroTitle>Seja o herói desse caso.</HeroTitle>
        <HeroDescription>Entre em contato: </HeroDescription>
        <Actions>
          <Action onPress={sendWhatsApp}>
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
