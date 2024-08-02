import {
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {Theme} from '../../theme';
import {TouchableOpacity} from 'react-native';
import {TouchableOpacityBoxProps} from './types';

export const Box = createBox<Theme>();

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
