import React from 'react';
import { View, ViewProps } from 'react-native';
import { ViewStyle } from 'react-native/types';
import { Color } from './Color';

const Divider = (props: ViewProps) => {
  return (<View
    style={{
      width: 1,
      height: 36,
      backgroundColor: Color.border,
      ...props.style as ViewStyle
    }}
    {...props}
  />);
};

export default Divider;
