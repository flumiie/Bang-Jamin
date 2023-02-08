import React from 'react'
import {
  Text as RNText, TextProps as RNTextProps, TextStyle,
} from 'react-native';

const BoldChillText = (props: RNTextProps) => {
  return <RNText style={{ fontFamily: 'Chillax-Bold', ...props.style as TextStyle }}>{props.children}</RNText>
}

export default BoldChillText;