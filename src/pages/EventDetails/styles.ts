import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  background: #1e2630;
`;
export const Imagem = styled.Image`
  height: 250px;
  align-self: stretch;
  border-radius: 10px;
`;

export const ContainerSubTitles = styled.View`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 10px;
  height: 50px;
  align-self: stretch;
  justify-content: space-between;
  /* background: red; */
  color: #fff;
`;
export const Price = styled.Text`
  color: #43ffa9;
  font-size: 20px;
  font-weight: 600;
`;
export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  flex-wrap: wrap;
`;
export const DescriptionsContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const TitleAbout = styled.Text`
  font-size: 30px;
  height: 50px;
  color: #ffff;
  font-weight: 400;
`;
export const About = styled.Text`
  font-size: 20px;
  height: 50px;
  color: #ffff;
  font-weight: 700;
`;

export const ButtonContainer = styled.View`
  display: flex;
  background: black;
  border-radius: 10px;
  height: 60px;
  margin: 10px;
  justify-content: center;
`;
export const ButtonContainerParticipant = styled.View`
  display: flex;
  background: #43ffa9;
  border-radius: 10px;
  height: 60px;
  margin: 10px;
  justify-content: center;
`;
export const BuyTitle = styled.Text`
  font-size: 25px;
  font-weight: 600;
  color: #ffff;
`;

export const Touchable = styled.TouchableOpacity`
  background: #9a6aff;
  display: flex;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
export const TouchableParticipant = styled.TouchableOpacity`
  background: #43ffa9;
  display: flex;
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
