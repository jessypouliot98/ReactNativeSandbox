import React from 'react';
import {Pressable, Text} from 'react-native';

export type ButtonProps = {
  children: string;
};

export const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
};
