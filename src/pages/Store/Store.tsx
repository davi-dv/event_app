import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useAuth} from '../../contexts/auth';
import {
  Background,
  TitleUser,
  ContainerTitle,
  SpaceName,
  ContainerTitleLogin,
  TitleUserP,
  Touchable
} from './Styles';
import {Card} from '../../components/Card/Card';
import IEvent from '../../interfaces/IEvent';
import Requests from '../../hooks/useApi';
import {formatEvents} from '../../utils/formatEventsImage';
import {Skeleton, VStack, HStack} from 'native-base';
import { useNavigation } from '@react-navigation/native';

export const Store = () => {
  const {loggedUser, getUser} = useAuth();
  const [eventsWithValue, setEventsWithValue] = useState<IEvent>();
  const [eventsFree, setEventsFree] = useState<IEvent>();
  const [loading, setIsLoading] = useState<boolean>();
  const navigate = useNavigation();

  useEffect(() => {
    setIsLoading(true);
    const getEvents = async () => {
      const res: IEvent = await Requests.get('/event');
      const getEventsByValue = res.filter(evt => evt.valor > 0);
      const getEventsFree = res.filter(evt => evt.valor === 0 || !evt.valor);
      setEventsWithValue(formatEvents(getEventsByValue));
      setEventsFree(formatEvents(getEventsFree));
    };
    getEvents();
    getUser();
    setIsLoading(false);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {loading && (
        <Skeleton
          flex="1"
          h="250"
          rounded="md"
          startColor="coolWhite.400"
          background="white"
        />
      )}
      <Background>
        {loggedUser && (
          <ContainerTitle>
            <TitleUser>
              Olá <TitleUserP>{loggedUser?.name}</TitleUserP>
            </TitleUser>
            <SpaceName>{loggedUser?.name?.substring(0, 3)}</SpaceName>
          </ContainerTitle>
        )}
        {!loggedUser && (
          <ContainerTitleLogin>
            <TitleUser>Olá,</TitleUser>
            <Touchable onPress={() => navigate.navigate('Login')}>
              <TitleUserP>Clique aqui para Fazer Login</TitleUserP>
            </Touchable>
          </ContainerTitleLogin>
        )}
        <Card title="Pagos" items={eventsWithValue} />
        <Card title="Gratuitos" items={eventsFree} />
      </Background>
    </View>
  );
};
