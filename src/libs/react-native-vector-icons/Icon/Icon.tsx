import React from 'react';
import type {IconProps as RNIconProps} from 'react-native-vector-icons/Icon';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export type AvailableIcons = 'dashboard' | 'settings' | 'lightbulb';

export type IconProps = RNIconProps & {
  name: AvailableIcons;
};

export const Icon: React.FC<IconProps> = props => {
  return <MaterialIcon {...props} />;
};
