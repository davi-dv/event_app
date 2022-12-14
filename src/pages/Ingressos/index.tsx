import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from '@react-navigation/native';
import * as S from './styles';
import {Spinner} from 'native-base';
import React, {useCallback, useEffect, useState} from 'react';
import {Currency} from '../../utils/Currency';
import {useAuth} from '../../contexts/auth';
import Requests from '../../hooks/useApi';
export const Ingressos = () => {
  const [purchases, setPurchases] = useState<any>();
  const [loading, setLoading] = useState<Boolean>();
  const route = useRoute();
  const navigation = useNavigation();
  const {loggedUser} = useAuth();
  const getTickets = async () => {
    if (loggedUser?.id) {
      setLoading(true);
      const purchases = await Requests.get(`purchase/user/${loggedUser?.id}`);

      let events;
      if (purchases) {
        const findEvent = Promise.all(
          purchases.map(async purchase => {
            try {
              const res = await Requests.get(`event/one/${purchase.id_evento}`);
              return res;
            } catch (error) {
              console.log(error);
            }
          })
        );
        events = await findEvent.then(evts => {
          return evts;
        });

        purchases.forEach(purchase => {
          events.forEach(evt => {
            if (purchase.id_evento === evt.id) {
              purchase.imagem = evt.imagem;
              purchase.nomeEvento = evt.nome;
              purchase.tipoPagamento = purchase.tipoPagamento;
            }
          });
        });
      }
      setLoading(false);
      setPurchases(purchases);
      return;
    }
    setPurchases(null);
  };
  useFocusEffect(
    useCallback(() => {
      getTickets();
    }, [loggedUser])
  );
  return (
    // <ScrollView>
    <S.Container>
      {/* <S.Imagem source={{uri: `${route.params?.imagem}`, scale: 1}} /> */}
      <S.Title>Meus Ingressos</S.Title>
      {loading && (
        <Spinner accessibilityLabel="Loading posts" color="emerald.500" />
      )}

      {purchases &&
        purchases.map(pr => {
          return (
            <S.DescriptionsContainer key={pr.id}>
              <S.TitleMessage>
                <S.TitleDestaque>Nome do evento:</S.TitleDestaque>{' '}
                {pr.nomeEvento}
              </S.TitleMessage>
              <S.TitleMessage>
                <S.TitleDestaque> Forma de pagamento:</S.TitleDestaque>{' '}
                {pr.tipoPagamento}
              </S.TitleMessage>
              <S.TitleMessage>
                <S.TitleDestaque> código do ingresso:</S.TitleDestaque>{' '}
                {pr.codingresso}
              </S.TitleMessage>
              <S.TitleMessage>
                <S.TitleDestaque>Valor:</S.TitleDestaque>
                {Currency(pr.valor)}
              </S.TitleMessage>
            </S.DescriptionsContainer>
          );
        })}
      {!purchases && (
        <S.DescriptionsContainerNoMessage>
          <S.TitleDestaqueNoMessage>Você não possui ingressos ainda :(</S.TitleDestaqueNoMessage>
        </S.DescriptionsContainerNoMessage>
      )}
      <S.ButtonContainer>
        <S.Touchable onPress={() => navigation.navigate('Home')}>
          <S.BuyTitle>Fazer mais compras</S.BuyTitle>
        </S.Touchable>
      </S.ButtonContainer>
    </S.Container>
    // </ScrollView>
  );
};
