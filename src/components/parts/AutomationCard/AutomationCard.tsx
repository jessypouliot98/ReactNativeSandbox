import React, {useState} from 'react';
import {tw} from '../../../styles';
import {Icon} from '../../../libs';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import {AutomationItem} from '../../../types';
import {PressableCard} from '../../general';

export type AutomationCardProps = {
  style?: StyleProp<ViewStyle>;
  item: AutomationItem;
};

export const AutomationCard: React.FC<AutomationCardProps> = ({
  style,
  item,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={[{height: 120, aspectRatio: 1}, style]}>
      <PressableCard
        style={[tw.hFull, tw.itemsCenter]}
        onPress={() => setIsActive(prevActive => !prevActive)}>
        <View style={[tw.flex1, tw.flexCenter]}>
          <Icon
            style={[tw.mb2]}
            name="lightbulb"
            size={42}
            color={isActive ? 'blue' : 'red'}
          />
        </View>
        <Text numberOfLines={1}>{item.name}</Text>
      </PressableCard>
    </View>
  );
};
