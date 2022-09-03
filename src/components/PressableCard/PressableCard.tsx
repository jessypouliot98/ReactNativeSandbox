import React, {useCallback, useMemo} from 'react';
import {Pressable} from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Card, CardProps} from '../Card/Card';

const DEFAULT_OPACITY = 1;
const PRESSED_IN_OPACITY = 0.5;
const FADE_DURATION = 150;

export type PressableCardProps = CardProps & {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
};

export const PressableCard: React.FC<PressableCardProps> = props => {
  const {onPress, onPressIn, onPressOut, onLongPress, ...cardProps} = props;
  const sv = useSharedValue(DEFAULT_OPACITY);
  const animatedStyles = useAnimatedStyle(
    () => ({
      opacity: sv.value,
    }),
    [sv],
  );

  const animateFadeIn = useCallback(() => {
    sv.value = withTiming(PRESSED_IN_OPACITY, {
      duration: FADE_DURATION,
      easing: Easing.bounce,
    });
  }, [sv]);

  const animateFadeOut = useCallback(() => {
    sv.value = withTiming(DEFAULT_OPACITY, {
      duration: FADE_DURATION,
      easing: Easing.bounce,
    });
  }, [sv]);

  const handlePressIn = useCallback(() => {
    animateFadeIn();
    onPressIn?.();
  }, [animateFadeIn, onPressIn]);

  const handlePressOut = useCallback(() => {
    animateFadeOut();
    onPressOut?.();
  }, [animateFadeOut, onPressOut]);

  const handleLongPress = useMemo(() => {
    if (!onLongPress) {
      return;
    }

    return () => {
      animateFadeOut();
      onLongPress();
    };
  }, [animateFadeOut, onLongPress]);

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handleLongPress}>
      <Card {...cardProps} style={[cardProps.style, animatedStyles]} />
    </Pressable>
  );
};
