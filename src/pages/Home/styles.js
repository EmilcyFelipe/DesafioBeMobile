import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #f0f0f0;
  flex: 1;
`;

export const Main = styled.View`
  padding: 0 5%;
  flex: 1;
`;

export const Title = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
`;

export const InputWrapper = styled.View`
  background-color: #ffff;
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  border: 2px solid #dfdfdf;
  border-radius: 5px;
  margin-top: 20px;
`;
export const Input = styled.TextInput`
  background-color: white;
  flex: 2;
  padding: 0;
  font-size: 20px;
`;
export const LabelWrapper = styled.View`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  flex-direction: row;
  background-color: #5984c0;
  justify-content: space-between;
  padding: 15px 20px;
  align-items: center;
  margin-top: 20px;
`;

export const Separator = styled.View`
  width: 100%;
  border-bottom-width: 1.5px;
  border-color: #d5d5d5;
`;
