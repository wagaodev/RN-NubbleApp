import {SRText} from '.';
import {TextVariants} from './types';

type SRTextProps = React.ComponentProps<typeof SRText>;
export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  italic?: boolean;
}

export * from '../../theme';
