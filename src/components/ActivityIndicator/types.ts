import {ActivityIndicatorProps} from 'react-native';
import {ThemeColors} from '../../theme';

export interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}
