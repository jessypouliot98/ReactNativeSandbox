import {StyleSheet} from 'react-native';
import {Theme} from './Theme';

export const tailwind = StyleSheet.create({
  wFull: {width: '100%'},
  wHalf: {width: '50%'},
  hFull: {height: '100%'},
  _m2: {margin: -Theme.spacing[2]},
  mb2: {marginBottom: Theme.spacing[2]},
  p2: {padding: Theme.spacing[2]},
  bgGray500: {backgroundColor: Theme.colors.gray[500]},
  bgGray800: {backgroundColor: Theme.colors.gray[800]},
  bgGray900: {backgroundColor: Theme.colors.gray[900]},
  bgTest: {backgroundColor: 'red'},
  flex1: {flex: 1},
  flexCenter: {justifyContent: 'center', alignItems: 'center'},
  justifyCenter: {justifyContent: 'center'},
  itemsCenter: {alignItems: 'center'},
  shadow: {elevation: Theme.shadow.regular},
  shadowMd: {elevation: Theme.shadow.md},
  shadowLg: {elevation: Theme.shadow.lg},
  shadowXl: {elevation: Theme.shadow.xl},
  rounded: {borderRadius: Theme.radius.regular},
  roundedMd: {borderRadius: Theme.radius.md},
  roundedLg: {borderRadius: Theme.radius.lg},
  roundedXl: {borderRadius: Theme.radius.xl},
  roundedFull: {borderRadius: Theme.radius.full},
});
