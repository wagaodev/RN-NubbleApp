import styled from 'styled-components/native';
import {Box} from '../Box';
import {Text} from '../Text';
import {Pressable} from 'react-native';

export const Press = styled(Pressable)``;

export const Container = styled(Box).attrs({
  marginBottom: 's20',
})``;

export const Label = styled(Text).attrs({
  preset: 'paragraphMedium',
  marginBottom: 's4',
})``;

export const ContainerTextInputArea = styled(Box).attrs({
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
})``;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'gray2',
})``;
