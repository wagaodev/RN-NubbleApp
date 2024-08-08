import {TextInputProps} from 'react-native';

export interface Props extends TextInputProps {
  label: string;
  errorMessage: string;
  RightComponent?: React.ReactElement;
}
