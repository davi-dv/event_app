import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  // Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  LogoutButton
} from './style';
import Input from '../../components/Input';
import signUpSchema from './Schema';
import {ValidationError} from 'yup';
import Requests from '../../hooks/useApi';
import {useAuth} from '../../contexts/auth';
import {useNavigation} from '@react-navigation/native';
export const SignUp = () => {
  const {loggedUser, setUserInStorage, getUser, deleteUserFromStorage} =
    useAuth();
  console.log(loggedUser, 'LoGGED USERRRR');
  const navigation = useNavigation();

  const [email, setEmail] = useState<any>(loggedUser?.email);
  const [name, setName] = useState<any>(loggedUser?.name);
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  useEffect(() => {
    getUser;
  }, []);
  const clearFieldsError = () => {
    setNameError(undefined);
    setEmailError(undefined);
    setPasswordError(undefined);
    setConfirmPasswordError(undefined);
  };

  const clearFields = () => {
    setName(undefined);
    setEmail(undefined);
    setPassword(undefined);
    setConfirmPassword(undefined);
  };
  const [emailError, setEmailError] = useState<string>();
  const [nameError, setNameError] = useState<string>();
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const handleSignUp = async () => {
    try {
      clearFieldsError();
      await signUpSchema.validate(
        {email, name, password, confirmPassword},
        {abortEarly: false}
      );
      const send = {
        email,
        nome: name,
        password,
        confirmPassword
      };
      let res;
      if (loggedUser?.id) {
        res = await Requests.put(`user/edit/${loggedUser?.id}`, send);
        if (res) {
          setUserInStorage(res);
          Alert.alert('Usuario editado com sucesso!');
          navigation.navigate('Login');
        }
      } else {
        res = await Requests.post('user/signup', send);
        if (res) Alert.alert('Usuario criado com sucesso!');
        navigation.navigate('Login');
      }
      clearFields();
    } catch (error) {
      console.log(error);
      if (error instanceof ValidationError) {
        error.inner.forEach(error => {
          if (error.path === 'name') setNameError(error.message);
          if (error.path === 'email') setEmailError(error.message);
          if (error.path === 'password') setPasswordError(error.message);
          if (error.path === 'confirmPassword')
            setConfirmPasswordError(error.message);
        });
      }
    } finally {
      if (!loggedUser) {
        clearFields();
      }
    }
    return;
  };
  const handleLogout = async () => {
    clearFields();
    await deleteUserFromStorage();
    Alert.alert('Você saiu do sistema!')
  };
  return (
    <Background>
      <Container>
        {/* <Logo source={require('../../assets/Logo.png')} /> */}
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            icon="user"
            autoCapitalize="none"
            value={name}
            error={nameError}
            onChangeText={text => setName(text)}
          />
        </AreaInput>
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
            autoCapitalize="none"
            error={passwordError}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Confirmar senha"
            icon="lock"
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
            error={confirmPasswordError}
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>
            {loggedUser ? 'Editar Dados' : 'Cadastrar-se'}
          </SubmitText>
        </SubmitButton>
        {loggedUser && (
          <LogoutButton onPress={handleLogout}>
            <SubmitText>Sair</SubmitText>
          </LogoutButton>
        )}

        <Link onPress={() => navigation.navigate('Login')}>
          {!loggedUser && <LinkText>Clique para Fazer login</LinkText>}
        </Link>
      </Container>
    </Background>
  );
};
