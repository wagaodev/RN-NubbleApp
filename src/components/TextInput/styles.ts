import styled from 'styled-components/native';
import {Box} from '../Box';
import {Text} from '../Text';
import {Pressable} from 'react-native';
import {Props} from './types';
import {theme} from '../../theme';

export const Press = styled(Pressable)``;
export const IconButton = styled(Pressable)`
  margin-left: ${theme.spacing.s16}px;
  justify-content: center;
`;

export const Container = styled(Box).attrs({
  mb: 's20',
})``;

export const Label = styled(Text).attrs({
  preset: 'paragraphMedium',
  mb: 's4',
})``;
export const ErrorMessageLabel = styled(Text).attrs({
  preset: 'paragraphSmall',
  bold: true,
  color: 'error',
})``;

export const ContainerTextInputArea = styled(Box).attrs<
  Pick<Props, 'errorMessage'>
>(({errorMessage}) => ({
  borderColor: errorMessage ? 'error' : 'gray4',
  borderWidth: errorMessage ? 2 : 1,
  padding: 's16',
  borderRadius: 's12',
}))`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'gray2',
})`
  flex-shrink: 1;
  flex-grow: 1;
`;
