import {TouchableOpacity} from 'react-native';

import {
  backgroundColor,
  border,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';
import {Theme} from '../../theme';
import {ButtonProps} from './types';

export const Touchable = createRestyleComponent<ButtonProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);
