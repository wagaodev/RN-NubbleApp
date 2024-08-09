import styled from 'styled-components/native';
import {Box, Button, Text, TextInput} from '../../../components';
import {TouchableOpacity} from 'react-native';

export const Container = styled(Box).attrs({
  flex: 1,
  padding: 's20',
  backgroundColor: 'grayWhite',
})``;
export const Form = styled(Box).attrs({
  marginTop: 's20',
  marginBottom: 's32',
})``;

export const TitleHeader = styled(Text).attrs({
  preset: 'headingMedium',
  marginBottom: 's12',
})``;

export const DescriptionHeader = styled(Text).attrs({
  preset: 'paragraphMedium',
  marginBottom: 's12',
})``;

export const EmailInput = styled(TextInput).attrs({
  autoCapitalize: 'none',
  autoComplete: 'email',
})``;
export const PasswordInput = styled(TextInput).attrs({
  secureTextEntry: true,
  autoCapitalize: 'none',
})``;

export const ForgotPassword = styled(TouchableOpacity).attrs({})``;

export const ForgotPasswordText = styled(Text).attrs({
  preset: 'paragraphMedium',
  color: 'primary',
})`
  font-weight: bold;
  text-decoration: underline;
`;

export const ContainerButton = styled(Box).attrs({
  marginTop: 's20',
})``;

export const ButtonSignIn = styled(Button).attrs({
  preset: 'primary',
  marginBottom: 's8',
})``;
export const ButtonSignUp = styled(Button).attrs({
  preset: 'outline',
})``;
