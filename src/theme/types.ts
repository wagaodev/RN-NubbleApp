import {TextProps as RNTextProps} from 'react-native';
import {iconRegistry} from './iconRegistry';
import {theme} from './theme';

export interface TextProps extends RNTextProps {
  preset?: TextVariants;
}
export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export interface IconBase {
  name: IconName;
  size?: number;
  color?: ThemeColors;
}

export type IconType = typeof iconRegistry;
export type IconName = keyof IconType;
export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
