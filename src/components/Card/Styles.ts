import styled from 'styled-components/native';
export const MainContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;

`
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  /* background: #fff; */
  height: 570px;
  width: 150px;
  border-radius: 14px;
  margin: 10px;
  margin-top: 10px;
`;
export const Title = styled.Text`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin: 2px;
  font-weight: 700;
  /* background: #fff; */
  color: #9A6AFF;
`;

export const TitleCategories = styled.Text`
  font-size: 20px;
  display: flex;
  padding: 15px;
  font-weight: 700;
  /* background: #fff; */
  color: #2cf6b3;
`;


export const Data = styled.Text`
  display: flex;
  color: #9a6aff;
  font-weight: 600;
  font-size: 15px;
  background: #fff;
`;
export const Imagem = styled.Image`
  height: 100px;
  width: 150px;
  border-radius: 10px;
`;
export const SpaceDesc = styled.View`
  font-size: 13px;
  /* background: red; */
  height: 200px;
  /* flex: 1; */
`;
