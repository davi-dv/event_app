import styled from 'styled-components/native';
export const Container = styled.ScrollView`
  flex: 1;
  background: #1e2630;
`;
export const Imagem = styled.Image`
  height: 250px;
  align-self: stretch;
  border-radius: 10px;
`;
export const Title = styled.Text`
  height: 30px;
  text-align: center;
  margin: 20px;
  border-radius: 10px;
  font-size: 20px;
  color: #fff;
`;
export const ContainerSubTitles = styled.View`
  display: flex;
  flex-direction: row;
  font-size: 20px;
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
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  background: #9a6aff;
  align-items: flex-start;
`;
export const DescriptionsContainerNoMessage = styled.View`
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  align-items: center;
`;
export const TitleMessage = styled.Text`
  font-size: 15px;
  height: 30px;
  color: #fff;
  font-weight: 400;
`;
export const TitleDestaque = styled.Text`
  font-size: 15px;
  height: 30px;
  color: #000;
  font-weight: 400;
`;
export const TitleDestaqueNoMessage = styled.Text`
  font-size: 15px;
  height: 30px;
  color: #8f9a9c;
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
