import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/mobile";
import React, { useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";

import logoImg from "../../../assets/img/logo/logo.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import useKeyboardListener from "../../hooks/useKeyboardListener";
import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();
  const { didKeyboardShow } = useKeyboardListener();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={(data) => {
                console.log(data);
              }}
            >
              <Input name="name" icon="user" placeholder="Nome" />
              <Input name="email" icon="mail" placeholder="E-mail" />
              <Input name="password" icon="lock" placeholder="Senha" />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      {!didKeyboardShow && (
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      )}
    </>
  );
};

export default SignUp;
