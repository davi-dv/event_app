import {ScrollView, TouchableOpacity, View, Text} from 'react-native';
import {
  Title,
  TitleCategories,
  Container,
  Imagem,
  SpaceDesc,
  MainContainer
} from './Styles';
import React, {memo} from 'react';
import IEvent from '../../interfaces/IEvent';

import {useNavigation} from '@react-navigation/native';
import image from '../../assets/noimage.png';
const DEFAULT_IMAGE = Imagem.resolveAssetSource(image).uri;
interface EventProps {
  title?: 'Pagos' | 'Gratuitos';
  items: Array<IEvent>;
}
export const Card: React.FC<EventProps> = memo(({title, items}) => {
  const route = useNavigation();
  return (
    <MainContainer>
      <TitleCategories>{title}</TitleCategories>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {items?.map((evt, index) => (
          <Container key={index}>
            <TouchableOpacity
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                route.navigate('EventDetails', evt);
              }}>
              {evt?.imagem && (
                <Imagem source={{uri: `${evt?.imagem}`, scale: 1}} />
              )}
              {!evt?.imagem && (
                <Imagem source={{uri: DEFAULT_IMAGE, scale: 1}} />

              )}
              <SpaceDesc>
                <Title>{evt.nome}</Title>
                <Title>{evt.data}</Title>
                {/* <Title>{evt.valor}</Title> */}
              </SpaceDesc>
            </TouchableOpacity>
          </Container>
        ))}
      </ScrollView>
    </MainContainer>
  );
});
