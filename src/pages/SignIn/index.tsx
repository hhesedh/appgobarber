import React from "react";
import { Image, Text } from "react-native";

import logoImg from "../../../assets/img/logo/logo.png";
import { Container, Title } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title> Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
