import {TextProps as RNTextProps} from 'react-native';

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
