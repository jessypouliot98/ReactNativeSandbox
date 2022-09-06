import React from 'react';
import {FlatList} from 'react-native';
import {tw} from '../../../styles';
import {AutomationCard} from '../AutomationCard/AutomationCard';
import {AutomationItem} from '../../../types';

export type ZoneAutomationListProps = {
  items: AutomationItem[];
};

export const ZoneAutomationList: React.FC<ZoneAutomationListProps> = ({
  items,
}) => {
  return (
    <FlatList
      data={items}
      showsHorizontalScrollIndicator={false}
      style={[tw._m2]}
      horizontal={true}
      keyExtractor={item => item.uuid}
      renderItem={({item}) => <AutomationCard style={[tw.p2]} item={item} />}
    />
  );
};
