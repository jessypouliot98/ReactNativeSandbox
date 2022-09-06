import React, {useMemo} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';
import {tw} from '../../../../styles';
import {BottomTabNavigationFC} from '../../../types';
import {ZoneAutomationList} from '../../../../components/parts';
import {
  AutomationItem,
  AutomationType,
  AutomationZone,
} from '../../../../types';

const zone1: AutomationZone = {
  uuid: 'aaa1',
  name: 'Living Room',
};

const zone2: AutomationZone = {
  uuid: 'aaa2',
  name: 'Bedroom',
};

const automationItems: AutomationItem[] = [
  {
    uuid: '0001',
    type: AutomationType.lightBulb,
    name: 'Foo',
    zone: zone1,
  },
  {
    uuid: '0002',
    type: AutomationType.lightStripARGB,
    name: 'Bar',
    zone: zone1,
  },
  {
    uuid: '0003',
    type: AutomationType.lightRelay,
    name: 'Baz',
    zone: zone1,
  },
  {
    uuid: '0004',
    type: AutomationType.lightStripRGB,
    name: 'Bax',
    zone: zone2,
  },
  {
    uuid: '0005',
    type: AutomationType.lightStrip,
    name: 'Lap',
    zone: zone2,
  },
  {
    uuid: '0006',
    type: AutomationType.lightStrip,
    name: 'Lap',
    zone: zone2,
  },
  {
    uuid: '0007',
    type: AutomationType.lightStrip,
    name: 'Lap',
    zone: zone2,
  },
  {
    uuid: '0008',
    type: AutomationType.lightStrip,
    name: 'Lap',
    zone: zone2,
  },
  {
    uuid: '0009',
    type: AutomationType.lightStrip,
    name: 'Lap',
    zone: zone2,
  },
];

export const DashboardTab: BottomTabNavigationFC = () => {
  const zones = useMemo(() => {
    return automationItems.reduce((acc, item, i) => {
      const zoneEntry = acc.get(item.zone.uuid);

      if (!zoneEntry) {
        acc.set(item.zone.uuid, [item.zone, [item]]);
      } else {
        const [, zoneList] = zoneEntry;
        zoneList.push(item);
      }

      return acc;
    }, new Map<string, [AutomationZone, AutomationItem[]]>([]));
  }, []);

  console.log(
    Array.from(zones).map(zone => ({
      data: zone,
    })),
  );

  return (
    <SectionList
      sections={Array.from(zones).map(([_key, entry]) => ({
        data: [
          {
            zone: entry[0],
            items: entry[1],
          },
        ],
      }))}
      stickySectionHeadersEnabled={true}
      scrollToOverflowEnabled={true}
      renderSectionHeader={({section}) => {
        const zone = section.data[0].zone;

        return (
          <View style={[tw.p2, tw.bgGray500]}>
            <Text style={{ color: 'white' }}>{zone.name}</Text>
          </View>
        );
      }}
      renderItem={({section}) => {
        const items = section.data[0].items;

        return (
          <View style={[tw.p2]}>
            <ZoneAutomationList items={items} />
          </View>
        );
      }}
    />
  );
};
