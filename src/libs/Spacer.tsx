import React from 'react';
import { View } from 'react-native';
import { ViewStyle } from 'react-native/types';

interface SpacerProps extends ViewStyle {
  width?: number;
  height?: number;
}
const Spacer = (props: SpacerProps) => {
  return <View style={props} />;
};

export default Spacer;
