import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #1e2630;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  margin-bottom: 15px;
`;
export const AreaInput = styled.View`
  margin-bottom: 15px;
  width: 90%;
  flex-direction: row;
`;
// export const Input = styled.TextInput.attrs({
//   placeholderTextColor: 'rgba(255,255,255,0.20)'
// })`
//   background: rgba(0, 0, 0, 0.2);
//   width: 90%;
//   font-size: 17px;
//   color: #fff;
//   margin-bottom: 15px;
//   padding: 10px;
//   border-radius: 7px;
// `;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #9a6aff;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 9px;
`;

export const LinkText = styled.Text`
  color: #fff;
`;
