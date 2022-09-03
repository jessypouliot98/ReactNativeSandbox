import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PressableCard} from '../../../../components';
import {Icon} from '../../../../libs';
import {tw} from '../../../../styles';
import {BottomTabNavigationFC} from '../../../types';

export const DashboardTab: BottomTabNavigationFC = () => {
  return (
    <View style={[tw.p2, tw.flex1]}>
      <Text>DashboardTab</Text>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={n => n.toString()}
        // horizontal={true}
        renderItem={item => (
          <View
            style={[
              {width: 300, height: 300},
              tw.p2,
              {backgroundColor: 'blue'},
            ]}>
            <PressableCard
              style={[{width: 300, height: 300}, tw.bgTest, tw.flexCenter]}
              onPress={() => console.log(item)}>
              <View style={[tw.flexCenter]}>
                <Icon style={[tw.mb2]} name="lightbulb" size={42} />
                <Text>{`Living Room #${item.item}`}</Text>
              </View>
            </PressableCard>
          </View>
        )}
      />
    </View>
  );
};
