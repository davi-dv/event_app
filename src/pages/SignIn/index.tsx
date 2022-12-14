import {View, Text, Modal, Alert} from 'react-native';
import React, {useState} from 'react';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  // Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './style';
import Input from '../../components/Input';
import loginSchema from './Schema';
import {ValidationError} from 'yup';
import Requests from '../../hooks/useApi';
import {useLinkTo, useNavigation, useRoute} from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignIn = () => {
  const {setLoggedUser} = useAuth();
  const navigate = useNavigation();
  const redirect = useLinkTo();
  const mock = {
    email: 'teste@unochapeco.edu.br',
    password: '123456'
  };
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const clearFieldsError = () => {
    setEmailError(undefined);
    setPasswordError(undefined);
  };
  const clearFields = () => {
    setEmail('');
    setPassword('');
  };
  const handleLogin = async () => {
    clearFieldsError();
    try {
      await loginSchema.validate({email, password}, {abortEarly: false});
      const res = await Requests.post(
        '/user/signin',
        {email, password},
        'login'
      );
      if (res) {
        Alert.alert('Seja bem vindo ' + res.name);
        setLoggedUser(res);
        await AsyncStorage.setItem('@api-data', JSON.stringify(res));
        navigate.navigate('Home');
      }
      clearFields();
    } catch (error) {
      console.log(error);
      if (error instanceof ValidationError) {
        error.inner.forEach(error => {
          error.path === 'email'
            ? setEmailError(error.message)
            : setPasswordError(error.message);
        });
      }
    }
    return;
  };
  return (
    <Background>
      <Container>
        {/* <Logo source={require('../../assets/Logo.png')} /> */}

        <LinkText> {email}</LinkText>
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            icon="envelope"
            autoCapitalize="none"
            error={emailError}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            icon="lock"
            autoCorrect={false}
            secureTextEntry={true}
            error={passwordError}
            autoCapitalize="none"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText onPress={() => redirect('/Cadastro')}>
            Criar uma conta!
          </LinkText>
        </Link>
      </Container>
    </Background>
  );
};
