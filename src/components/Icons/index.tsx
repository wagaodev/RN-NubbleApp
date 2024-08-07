import React from 'react';
import {IconBase, iconRegistry} from '../../theme';
import {useAppTheme} from '../../hook/useAppTheme';

export const Icons = ({name, color = 'backgroundContrast', size}: IconBase) => {
  const SVGIcon = iconRegistry[name];
  const {colors} = useAppTheme();
  return <SVGIcon color={colors[color]} size={size} />;
};
