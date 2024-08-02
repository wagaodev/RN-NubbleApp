import {ButtonPreset, ButtonUI} from './types';

export const buttonPresets: Record<ButtonPreset, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: 'primary',
    },
    content: 'primary',
  },
  secondary: {
    container: {
      backgroundColor: 'carrotSecondary',
    },
    content: 'primaryContrast',
  },
};
