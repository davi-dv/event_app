import styled from 'styled-components/native';

export const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: #323d4a;
`;

export const ContainerCardInformationsEvent = styled.View`
  background: #1e2630;
  max-height: 250px;
  margin: 10px;
  border-radius: 10px;
  align-self: stretch;
`;
export const Imagem = styled.Image`
  border-radius: 10px;
  flex: 1;
`;
export const ContainerImagem = styled.View`
  align-self: stretch;
  display: flex;
  justify-content: center;
  margin: 10px;
  height: 150px;
`;
export const ContainerInformationsOrder = styled.View`
  align-self: stretch;
  margin: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
export const Date = styled.Text`
  font-size: 20px;
  height: 40px;
  font-weight: 600;
  color: #fff;
`;
export const Price = styled.Text`
  font-size: 20px;
  height: 40px;
  font-weight: 600;
  color: #43ffa9;
`;
export const ContainerFields = styled.View`
  margin: 10px;
  height: 210px;
  margin-bottom: 5px;
  justify-content: space-between;
  align-self: stretch;
`;




export const ContainerTitlePayment = styled.View`
  align-self: stretch;
  height: 40px;
  display: flex;
  padding: 10px;

  border-radius: 5px;
  flex-direction: column;
  align-items: flex-start;
`;

export const titleFormPayment = styled.Text`
  font-size: 20px;
  height: 40px;
  font-weight: 600;
  color: #ffff;
`;