import styled from 'styled-components/native';
export const Background = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #1e2630;
`;
export const TitleUser = styled.Text`
  font-size: 25px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
`;
export const TitleUserP = styled.Text`
  font-size: 23px;
  color: #8f9a9c;
  padding: 5px;
  border-radius: 5px;
`;
export const ContainerTitle = styled.View`
  font-family: Arial sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerTitleLogin = styled.View`
  font-family: Arial sans-serif;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;
export const SpaceName = styled.Text`
  padding: 10px;
  border-radius: 20px;
  background-color: red;
  color: #fff;
  text-align: center;
`;

export const Touchable = styled.TouchableOpacity`
  color: #8f9a9c;
  text-align: center;
`;