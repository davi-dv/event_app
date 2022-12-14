import {Text} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import * as S from './styles';
import {Spinner} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {useAuth} from '../../contexts/auth';
import Requests from '../../hooks/useApi';
export const Participant = () => {
  const [participants, setParticipants] = useState<any>();
  const [loading, setLoading] = useState<Boolean>();
  const navigation = useNavigation();
  const {loggedUser} = useAuth();
  const getParticipants = async () => {
    if (loggedUser?.id) {
      setLoading(true);
      const participants = await Requests.get(
        `/participant/single/${loggedUser?.id}`
      );
      const event = await Requests.get(`/event`);
      if (event) {
        participants.map(participant => {
          event.map(evt => {
            if (participant.id_evento === evt.id) {
              participant.nomeEvento = evt.nome;
              participant.data = evt.data;
              participant.descricao = evt.descricao;
            }
          });
        });
      }
      setLoading(false);
      setParticipants(participants);
      return;
    }
    setParticipants(null);
  };
  useFocusEffect(
    useCallback(() => {
      getParticipants();
    }, [loggedUser])
  );

  return (
    <S.Container>
      <S.Title>Eventos que participo</S.Title>
      {loading && (
        <Spinner accessibilityLabel="Loading posts" color="emerald.500" />
      )}

      {participants &&
        participants.map(participant => {
          return (
            <S.DescriptionsContainer key={participant.id}>
              <S.TitleMessage>
                <S.TitleDestaque>Nome do evento: </S.TitleDestaque>
                {participant.nomeEvento}
              </S.TitleMessage>
              <S.TitleMessage>
                <S.TitleDestaque>Data:</S.TitleDestaque>
                {participant.data}
              </S.TitleMessage>
              <S.TitleMessage>
                <S.TitleDestaque>Descricão:</S.TitleDestaque>
                {participant.descricao}

              </S.TitleMessage>
            </S.DescriptionsContainer>
          );
        })}
      {!participants && (
        <S.DescriptionsContainerLogout>
          <S.TitleMessageLogout>
            Você não está participando de nenhum evento ainda :(
          </S.TitleMessageLogout>
        </S.DescriptionsContainerLogout>
      )}
      <S.ButtonContainer>
        <S.Touchable onPress={() => navigation.navigate('Home')}>
          <S.BuyTitle>Voltar para a home</S.BuyTitle>
        </S.Touchable>
      </S.ButtonContainer>
    </S.Container>
  );
};
