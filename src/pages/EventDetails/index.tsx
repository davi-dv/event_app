import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import IEvent from '../../interfaces/IEvent';
import * as S from './styles';
import React, {useEffect, useState} from 'react';
import {Currency} from '../../utils/Currency';
import Requests from '../../hooks/useApi';
import {useAuth} from '../../contexts/auth';
import image from '../../assets/noimage.png';
const DEFAULT_IMAGE = Image.resolveAssetSource(image).uri;

export const EventDetails = () => {
  const {loggedUser} = useAuth();
  const route = useRoute();
  const navigation = useNavigation();
  const [participant, setParticipant] = useState<boolean>();
  const createParticipant = async () => {
    await Requests.post(
      `/participant/create/${loggedUser?.id}/${route.params?.id}`,
      {nome: loggedUser.name}
    );
    getParticipant();
  };
  const getParticipant = async () => {
    const hasParticipant = await Requests.get(
      `/participant/single/${loggedUser?.id}`
    );
    const isParticip = hasParticipant.filter(
      item => item.id_evento === route.params?.id
    );
    if (isParticip.length > 0) setParticipant(true);
  };
  useEffect(() => {
    console.log('executei');
    if (loggedUser?.id) getParticipant();
  }, []);
  return (
    <S.Container>
      {route.params?.imagem && (
        <S.Imagem
          source={{
            uri: `${route.params?.imagem}`,
            scale: 1
          }}
        />
      )}
      {!route.params?.imagem && (
        <S.Imagem source={{uri: DEFAULT_IMAGE, scale: 1}} />
      )}
      <S.ContainerSubTitles>
        <S.Name>{route?.params.nome}</S.Name>
        {route?.params.valor > 0 && (
          <S.Price>{Currency(route?.params.valor)}</S.Price>
        )}
        {route?.params.valor <= 0 && <S.Price>Gratuito</S.Price>}
      </S.ContainerSubTitles>
      <S.DescriptionsContainer>
        <S.TitleAbout>Sobre</S.TitleAbout>
        <S.About>{route.params.descricao}</S.About>
      </S.DescriptionsContainer>
      {!loggedUser && (
        <S.ButtonContainer>
          <S.Touchable
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <S.BuyTitle>Fazer Login</S.BuyTitle>
          </S.Touchable>
        </S.ButtonContainer>
      )}
      {!participant && loggedUser && (
        <S.ButtonContainer>
          <S.Touchable
            onPress={() => {
              if (route?.params.valor > 0) {
                navigation.navigate('purchase', route.params);
                return;
              }
              createParticipant();
            }}>
            <S.BuyTitle>
              {route?.params.valor > 0
                ? 'Comprar ingresso'
                : 'Participar do evento'}
            </S.BuyTitle>
          </S.Touchable>
        </S.ButtonContainer>
      )}
      {participant && (
        <S.ButtonContainerParticipant>
          <S.TouchableParticipant>
            <S.BuyTitle>Está participando :) </S.BuyTitle>
          </S.TouchableParticipant>
        </S.ButtonContainerParticipant>
      )}
    </S.Container>
  );
};
