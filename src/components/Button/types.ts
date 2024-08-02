import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
} from '@shopify/restyle';
import {Theme, ThemeColors} from '../../theme';
import {TouchableOpacityProps} from 'react-native';
import {TouchableOpacityBoxProps} from '../Box/types';

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

export type ButtonProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps & {
    title: string;
    loading?: boolean;
    preset?: ButtonPreset;
  };
