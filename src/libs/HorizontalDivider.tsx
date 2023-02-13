import React from 'react';
import { View } from 'react-native';
import { Color } from './Color';

const HorizontalDivider = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: Color.border,
        height: 1,
      }}
    />
  );
};

export default HorizontalDivider;
