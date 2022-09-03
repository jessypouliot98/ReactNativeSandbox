import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {tw} from '../../styles';

export type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Card: React.FC<CardProps> = ({children, style}) => {
  return (
    <Animated.View
      style={[
        tw.shadow,
        tw.p2,
        tw.roundedLg,
        tw.bgGray800,
        {aspectRatio: 1, flex: 1},
        style,
      ]}>
      {children}
    </Animated.View>
  );
};
